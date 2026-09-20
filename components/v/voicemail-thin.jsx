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
		"content": `<style>.pxy6ktbxd {
  fill: currentColor;
  d: path("M200 76a52 52 0 0 0-27.66 96H83.66A52 52 0 1 0 56 180h144a52 52 0 0 0 0-104M12 128a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m188 44a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44");
}
</style><path class="pxy6ktbxd"/>`,
		"fallback": "ph:voicemail-thin",
	});
}

export default Component;
