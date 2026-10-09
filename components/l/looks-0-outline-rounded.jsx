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
		"content": `<style>.eorr7-reb {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14zm6.116 11.5h1.769q.67 0 1.143-.472q.472-.472.472-1.143v-5.77q0-.67-.472-1.143q-.472-.472-1.143-.472h-1.77q-.67 0-1.143.472q-.472.472-.472 1.144v5.769q0 .67.472 1.143q.472.472 1.144.472m0-8h1.769q.269 0 .442.173t.173.443v5.769q0 .269-.173.442t-.442.173h-1.77q-.269 0-.442-.173t-.173-.442v-5.77q0-.269.173-.442t.443-.173");
}
</style><path class="eorr7-reb"/>`,
		"fallback": "material-symbols-light:looks-0-outline-rounded",
	});
}

export default Component;
