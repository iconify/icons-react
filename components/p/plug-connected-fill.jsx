import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kuku_i-5u {
  fill: currentColor;
  d: path("m17.933 4.653l2.36-2.36a.999.999 0 1 1 1.414 1.414l-2.36 2.36a5.24 5.24 0 0 1 .512 4.905a5.2 5.2 0 0 1-1.152 1.735a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414a5.2 5.2 0 0 1 1.735-1.152a5.24 5.24 0 0 1 4.905.512M8.414 13L11 15.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L12.414 17l.293.293a1 1 0 0 1 0 1.414a5.2 5.2 0 0 1-1.735 1.152a5.24 5.24 0 0 1-4.905-.512l-2.36 2.36a.999.999 0 1 1-1.414-1.414l2.36-2.36a5.24 5.24 0 0 1-.512-4.905a5.2 5.2 0 0 1 1.152-1.735a1 1 0 0 1 1.414 0l.293.293l2.293-2.293a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="kuku_i-5u"/>`,
		"fallback": "coolicons:plug-connected-fill",
	});
}

export default Component;
