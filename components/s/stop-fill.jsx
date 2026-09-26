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
		"content": `<style>.jsodg2gky {
  fill: currentColor;
  d: path("M4 7C4 5.343146 5.343146 4 7 4L17 4C18.656854 4 20 5.343146 20 7L20 17C20 18.656854 18.656854 20 17 20L7 20C5.343146 20 4 18.656854 4 17Z");
}
</style><path class="jsodg2gky"/>`,
		"fallback": "keyline-icons:stop-fill",
	});
}

export default Component;
