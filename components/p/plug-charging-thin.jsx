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
		"content": `<style>.qo5-7ur_a {
  fill: currentColor;
  d: path("M224 60h-52V16a4 4 0 0 0-8 0v44H92V16a4 4 0 0 0-8 0v44H32.55C28.13 60 28 63.59 28 64a4 4 0 0 0 4 4h20v92a36 36 0 0 0 36 36h36v44a4 4 0 0 0 8 0v-44h36a36 36 0 0 0 36-36V68h20a4 4 0 0 0 0-8m-28 100a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28V68h136Zm-87.29-29.72a4 4 0 0 1-.46-3.68l12-32a4 4 0 0 1 7.5 2.8l-10 26.6H144a4 4 0 0 1 3.75 5.4l-12 32a4 4 0 1 1-7.5-2.8l10-26.6H112a4 4 0 0 1-3.29-1.72");
}
</style><path class="qo5-7ur_a"/>`,
		"fallback": "ph:plug-charging-thin",
	});
}

export default Component;
