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
		"content": `<style>.djhjj_beq {
  fill: currentColor;
  d: path("M9.5 16.5h3.385q.69 0 1.152-.462t.463-1.153V13.23q0-.592-.31-.883q-.31-.29-.69-.348q.38-.058.69-.348t.31-.883V9.115q0-.69-.462-1.153T12.885 7.5H9.5v1h3.385q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173h-1.77v1h1.77q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173H9.5zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z");
}
</style><path class="djhjj_beq"/>`,
		"fallback": "material-symbols-light:looks-3-outline",
	});
}

export default Component;
