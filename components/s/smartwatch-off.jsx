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
		"content": `<style>.l99yr9bzm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.9 6H17q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T18 7v7.086M14.028 18H7q-.098 0-.195-.019t-.188-.057t-.173-.093q-.081-.054-.151-.124t-.124-.151q-.055-.082-.093-.173t-.057-.188T6 17V9.943m2.714-5.225L9 3h6l.5 3m-7 12l.5 3h6l.289-1.735M3.5 3.5l17 17");
}
</style><path class="l99yr9bzm"/>`,
		"fallback": "uix-sharp:smartwatch-off",
	});
}

export default Component;
