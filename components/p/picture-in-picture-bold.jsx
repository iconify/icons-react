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
		"content": `<style>.csbd4hb8y {
  fill: currentColor;
  d: path("M216 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M44 68h168v48h-76a12 12 0 0 0-12 12v60H44Zm104 120v-48h64v48Z");
}
</style><path class="csbd4hb8y"/>`,
		"fallback": "ph:picture-in-picture-bold",
	});
}

export default Component;
