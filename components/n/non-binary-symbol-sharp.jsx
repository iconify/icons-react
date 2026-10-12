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
		"content": `<style>.iclczrbim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.25a5.5 5.5 0 1 1 0 11a5.5 5.5 0 1 1 0-11m0 0v-7.5m-2.5 1.5l5 3m0-3l-5 3");
}
</style><path class="iclczrbim"/>`,
		"fallback": "iconoven:non-binary-symbol-sharp",
	});
}

export default Component;
