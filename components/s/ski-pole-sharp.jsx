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
		"content": `<style>.s833x7kgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.27 3.08l.99.19l.98.2l-.2.98l-.49 2.45l-.2.98l-.98-.2l-.98-.19l-.98-.2l.2-.98l.48-2.45l.2-.98zm8 0l.99.19l.98.2l-.2.98l-.49 2.45l-.2.98l-.98-.2l-.98-.19l-.98-.2l.2-.98l.48-2.45l.2-.98zM8.88 7.59L6.24 20.83M16.88 7.59l-2.64 13.24m-9.13-3.29l3.43.69m4.57-.69l3.43.69");
}
</style><path class="s833x7kgh"/>`,
		"fallback": "iconoven:ski-pole-sharp",
	});
}

export default Component;
