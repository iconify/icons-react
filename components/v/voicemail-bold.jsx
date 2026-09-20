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
		"content": `<style>.jc3xp1agn {
  fill: currentColor;
  d: path("M196 68a60 60 0 0 0-48 96h-40a60 60 0 1 0-48 24h136a60 60 0 0 0 0-120M24 128a36 36 0 1 1 36 36a36 36 0 0 1-36-36m172 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="jc3xp1agn"/>`,
		"fallback": "ph:voicemail-bold",
	});
}

export default Component;
