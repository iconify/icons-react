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
		"content": `<style>.qd131pb7p {
  fill: currentColor;
  d: path("M28 128a68.07 68.07 0 0 1 68-68h118.34l-17.17-17.17a4 4 0 0 1 5.66-5.66l24 24a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L214.34 68H96a60.07 60.07 0 0 0-60 60a4 4 0 0 1-8 0m196-4a4 4 0 0 0-4 4a60.07 60.07 0 0 1-60 60H41.66l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 1 0 5.66-5.66L41.66 196H160a68.07 68.07 0 0 0 68-68a4 4 0 0 0-4-4m-88 32a4 4 0 0 0 4-4v-48a4 4 0 0 0-5.79-3.58l-16 8a4 4 0 0 0 3.58 7.16l10.21-5.1V152a4 4 0 0 0 4 4");
}
</style><path class="qd131pb7p"/>`,
		"fallback": "ph:repeat-once-thin",
	});
}

export default Component;
