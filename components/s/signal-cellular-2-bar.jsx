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
		"content": `<style>.blmvltbck {
  fill: currentColor;
  d: path("M2 22L22 2v20zm11-2h7V6.85l-7 7z");
}
</style><path class="blmvltbck"/>`,
		"fallback": "material-symbols:signal-cellular-2-bar",
	});
}

export default Component;
