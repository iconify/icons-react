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
		"content": `<style>.gdjn7gbpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12h16v5H4Zm1 9h14m-9-9V8a2.828 2.828 0 1 1 4 0v4");
}
</style><path class="gdjn7gbpl"/>`,
		"fallback": "coolicons:stamp-sharp",
	});
}

export default Component;
