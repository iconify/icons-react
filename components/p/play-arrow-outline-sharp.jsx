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
		"content": `<style>.pgaoxullz {
  fill: currentColor;
  d: path("M9 17.192V6.808L17.154 12zm1-1.842L15.289 12L10 8.65z");
}
</style><path class="pgaoxullz"/>`,
		"fallback": "material-symbols-light:play-arrow-outline-sharp",
	});
}

export default Component;
