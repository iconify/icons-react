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
		"content": `<style>.h5p0tmbxi {
  fill: currentColor;
  d: path("M168 28H88a60.07 60.07 0 0 0-60 60v80a60.07 60.07 0 0 0 60 60h48a11.9 11.9 0 0 0 3.79-.62c27.63-9.21 78.38-60 87.59-87.59A11.9 11.9 0 0 0 228 136V88a60.07 60.07 0 0 0-60-60M52 168V88a36 36 0 0 1 36-36h80a36 36 0 0 1 36 36v36h-20a60.07 60.07 0 0 0-60 60v20H88a36 36 0 0 1-36-36m96 27.63V184a36 36 0 0 1 36-36h11.63C184 164.11 164.11 184 148 195.63");
}
</style><path class="h5p0tmbxi"/>`,
		"fallback": "ph:sticker-bold",
	});
}

export default Component;
