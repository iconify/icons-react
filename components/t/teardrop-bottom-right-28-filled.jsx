import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lmgohkx2j {
  fill: currentColor;
  d: path("M13.75 2C7.26 2 2 7.26 2 13.75v.5C2 20.74 7.26 26 13.75 26h9.5A2.75 2.75 0 0 0 26 23.25v-9.5C26 7.26 20.74 2 14.25 2z");
}
</style><path class="lmgohkx2j"/>`,
		"fallback": "fluent:teardrop-bottom-right-28-filled",
	});
}

export default Component;
