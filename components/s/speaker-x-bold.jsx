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
		"content": `<style>.tbfdl0b9v {
  fill: currentColor;
  d: path("M157.27 21.22a12 12 0 0 0-12.64 1.31L75.88 76H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 164 224V32a12 12 0 0 0-6.73-10.78M36 100h32v56H36Zm104 99.47l-48-37.35V93.88l48-37.34Zm108.49-55.95a12 12 0 0 1-17 17L216 145l-15.51 15.52a12 12 0 0 1-17-17L199 128l-15.52-15.51a12 12 0 0 1 17-17L216 111l15.51-15.51a12 12 0 0 1 17 17L233 128Z");
}
</style><path class="tbfdl0b9v"/>`,
		"fallback": "ph:speaker-x-bold",
	});
}

export default Component;
