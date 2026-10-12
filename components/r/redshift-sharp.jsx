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
		"content": `<style>.gv43xrbmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14c1.08 4 1.92 4 3 0c1.44-4 2.56-4 4 0c1.8 4 3.2 4 5 0c2.34-4 4.16-4 6.5 0M5.5 2.75l.33 2.42l2.42.33l-2.42.33l-.33 2.42l-.33-2.42l-2.42-.33l2.42-.33z");
}
</style><path class="gv43xrbmi"/>`,
		"fallback": "iconoven:redshift-sharp",
	});
}

export default Component;
