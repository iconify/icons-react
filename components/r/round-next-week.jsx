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
		"content": `<style>.bxznsvb_x {
  fill: currentColor;
  d: path("M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M10 5h4v2h-4zm.5 13a.7.7 0 0 1 0-1l2.5-2.5l-2.5-2.5c-.28-.28-.28-.72 0-1s.72-.28 1 0l3.15 3.15c.2.2.2.51 0 .71L11.5 18a.7.7 0 0 1-1 0");
}
</style><path class="bxznsvb_x"/>`,
		"fallback": "ic:round-next-week",
	});
}

export default Component;
