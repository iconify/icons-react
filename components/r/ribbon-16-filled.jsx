import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q--43hbti {
  fill: currentColor;
  d: path("M8 1a5 5 0 1 0 0 10A5 5 0 0 0 8 1M5 14.5v-3.303c.883.51 1.907.803 3 .803a6 6 0 0 0 3-.803V14.5a.5.5 0 0 1-.757.429L8 13.583L5.757 14.93A.5.5 0 0 1 5 14.5");
}
</style><path class="q--43hbti"/>`,
		"fallback": "fluent:ribbon-16-filled",
	});
}

export default Component;
