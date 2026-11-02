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
		"content": `<style>.r7luzybqz {
  fill: currentColor;
  d: path("m20.586 4l-6 6H9.414l-6-6ZM8.293 11.707A1 1 0 0 0 9 12h6c.265 0 .52-.105.707-.293L22 5.414V19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.414Z");
}
</style><path class="r7luzybqz"/>`,
		"fallback": "coolicons:mail-fill-sharp",
	});
}

export default Component;
