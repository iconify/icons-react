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
		"content": `<style>.fkmkvn0-b {
  fill: currentColor;
  d: path("M12.294 15.967q.59-.59.59-1.428V9H15.5V7.462h-3.384v5.5q-.249-.206-.566-.324t-.684-.119q-.839 0-1.43.59q-.59.591-.59 1.43t.59 1.428t1.43.59t1.428-.59M4.615 19q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="fkmkvn0-b"/>`,
		"fallback": "material-symbols-light:music-video",
	});
}

export default Component;
