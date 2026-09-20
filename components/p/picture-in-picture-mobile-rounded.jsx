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
		"content": `<style>.st_j7b95p {
  fill: currentColor;
  d: path("M19 19.385q0 .69-.462 1.153T17.384 21H6.616q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616zm-2.039-7.5V5.808q0-.348-.23-.578T16.155 5h-4.077q-.348 0-.578.23t-.23.578v6.077q0 .348.23.578t.578.23h4.077q.348 0 .578-.23t.23-.578");
}
</style><path class="st_j7b95p"/>`,
		"fallback": "material-symbols-light:picture-in-picture-mobile-rounded",
	});
}

export default Component;
