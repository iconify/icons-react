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
		"content": `<style>.wn-m8x_dc {
  fill: currentColor;
  d: path("M5.616 20q-.672 0-1.144-.472T4 18.385v-8.77q0-.67.472-1.143Q4.944 8 5.616 8H8.73v1H5.616q-.27 0-.443.173T5 9.616v8.769q0 .269.173.442t.443.173h12.769q.269 0 .442-.173t.173-.442v-8.77q0-.269-.173-.442T18.385 9h-3.116V8h3.115q.672 0 1.144.472T20 9.616v8.769q0 .67-.472 1.143q-.472.472-1.143.472zM12 15.308L8.692 12l.708-.708l2.1 2.095V1.5h1v11.887l2.1-2.095l.708.708z");
}
</style><path class="wn-m8x_dc"/>`,
		"fallback": "material-symbols-light:place-item",
	});
}

export default Component;
