import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mi8cx-bnz {
  fill: currentColor;
  d: path("M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M88 206.37V176h80v30.37a88.38 88.38 0 0 1-80 0M104 144h48v16h-48Zm14-16l10-48l10 48Zm72.22 62.23c-2 2-4.08 3.87-6.22 5.64V176a16 16 0 0 0-16-16v-16a16 16 0 0 0-13.61-15.8l-10.73-51.46a16 16 0 0 0-31.32 0l-10.73 51.46A16 16 0 0 0 88 144v16a16 16 0 0 0-16 16v19.87a89 89 0 0 1-6.22-5.64a88 88 0 1 1 124.44 0");
}
</style><path class="mi8cx-bnz"/>`,
		"fallback": "ph:marker-circle",
	});
}

export default Component;
