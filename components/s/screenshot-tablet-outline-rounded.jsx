import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cz_tsn-gj {
  fill: currentColor;
  d: path("M3.616 19q-.672 0-1.144-.472T2 17.385V6.615q0-.67.472-1.143Q2.944 5 3.616 5h16.769q.67 0 1.143.472q.472.472.472 1.144v10.769q0 .67-.472 1.143q-.472.472-1.143.472zM4.5 6h-.885q-.269 0-.442.173T3 6.616v10.769q0 .269.173.442t.443.173H4.5zm1 12h13V6h-13zm14-12v12h.885q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442T20.385 6zm0 0H21zm-15 0H3zm11.73 9.73h-1.864q-.191 0-.317.127t-.126.316t.126.317t.317.126h2.153q.248 0 .422-.184q.175-.184.175-.432v-2.134q0-.191-.126-.317t-.317-.126t-.316.126t-.126.317zM7.77 8.27h1.865q.19 0 .316-.127t.126-.316t-.126-.316t-.317-.126H7.5q-.248 0-.432.174q-.183.174-.183.422v2.153q0 .191.126.317t.316.126t.316-.126t.126-.317z");
}
</style><path class="cz_tsn-gj"/>`,
		"fallback": "material-symbols-light:screenshot-tablet-outline-rounded",
	});
}

export default Component;
