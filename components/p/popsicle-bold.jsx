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
		"content": `<style>.z0sij8rai {
  fill: currentColor;
  d: path("M128 4a76.08 76.08 0 0 0-76 76v96a20 20 0 0 0 20 20h24v28a32 32 0 0 0 64 0v-28h24a20 20 0 0 0 20-20V80a76.08 76.08 0 0 0-76-76m8 220a8 8 0 0 1-16 0v-28h16Zm44-52H76V80a52 52 0 0 1 104 0Zm-60-96v68a12 12 0 0 1-24 0V76a12 12 0 0 1 24 0m40 0v68a12 12 0 0 1-24 0V76a12 12 0 0 1 24 0");
}
</style><path class="z0sij8rai"/>`,
		"fallback": "ph:popsicle-bold",
	});
}

export default Component;
