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
		"content": `<style>.lhne4ccit {
  fill: currentColor;
  d: path("M5.5 18.5v-9h1v7.292l12.1-12.1l.708.708l-12.1 12.1H14.5v1z");
}
</style><path class="lhne4ccit"/>`,
		"fallback": "material-symbols-light:south-west",
	});
}

export default Component;
