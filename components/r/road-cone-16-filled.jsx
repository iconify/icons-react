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
		"content": `<style>.lkmywkfxb {
  fill: currentColor;
  d: path("M7.462 1a1 1 0 0 0-.97.757L5.056 7.5H8.5a.5.5 0 0 1 0 1H4.806l-.5 2H9.25a.5.5 0 0 1 0 1H4.056L3.43 14H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-1.931L9.509 1.757A1 1 0 0 0 8.537 1z");
}
</style><path class="lkmywkfxb"/>`,
		"fallback": "fluent:road-cone-16-filled",
	});
}

export default Component;
