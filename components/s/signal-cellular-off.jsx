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
		"content": `<style>.c6h4uzxif {
  fill: currentColor;
  d: path("M20.987 22.408L19.579 21H3l8.292-8.292L3.65 5.07l.708-.713L21.7 21.7zM21 18.2l-7.6-7.6L21 3z");
}
</style><path class="c6h4uzxif"/>`,
		"fallback": "material-symbols-light:signal-cellular-off",
	});
}

export default Component;
