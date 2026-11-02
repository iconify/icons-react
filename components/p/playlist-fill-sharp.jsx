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
		"content": `<style>.rhdsrebzt {
  fill: currentColor;
  d: path("M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m11 5a1 1 0 0 1 1.555-.832l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 14 18ZM3 11h8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m13 5.131L19.197 14L16 11.869ZM3 17h8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="rhdsrebzt"/>`,
		"fallback": "coolicons:playlist-fill-sharp",
	});
}

export default Component;
