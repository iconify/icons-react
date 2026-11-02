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
		"content": `<style>.rdf4o6ifl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7h8m-8 5h8m-8 5h8M4 6l2-2v6m-2 6a2 2 0 1 1 4 0l-4 4h4");
}
</style><path class="rdf4o6ifl"/>`,
		"fallback": "coolicons:list-ordered-sharp",
	});
}

export default Component;
