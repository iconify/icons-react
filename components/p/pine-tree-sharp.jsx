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
		"content": `<style>.ixwn7ab0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.55 3.46l3.4 4.33l.55.71h-1.75l.54.72l2.67 3.56l.54.72h-2.25l.56.7l2.88 3.6l.56.7H3.75l.56-.7l2.88-3.6l.56-.7H5.5l.54-.72l2.67-3.56l.54-.72H7.5l.55-.71l3.4-4.33l.55-.71zM12 18.5v2.75");
}
</style><path class="ixwn7ab0f"/>`,
		"fallback": "iconoven:pine-tree-sharp",
	});
}

export default Component;
