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
		"content": `<style>.cxa9bvkdq {
  fill: currentColor;
  d: path("M5.616 10.616q-.691 0-1.153-.463T4 9V6.23q0-.69.463-1.152q.462-.463 1.153-.463h12.769q.69 0 1.153.463Q20 5.54 20 6.23V9q0 .69-.462 1.153t-1.153.463zm0 8.769q-.691 0-1.153-.463Q4 18.46 4 17.769V15q0-.69.463-1.153t1.153-.462h12.769q.69 0 1.153.462T20 15v2.77q0 .69-.462 1.152q-.463.463-1.153.463z");
}
</style><path class="cxa9bvkdq"/>`,
		"fallback": "material-symbols-light:view-agenda-rounded",
	});
}

export default Component;
