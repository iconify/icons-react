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
		"content": `<style>.zaq7qe48h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.55 3.46l3.4 4.33q.55.71-.32.71q-.88 0-.34.72l2.67 3.56q.54.72-.36.72h-.45q-.9 0-.34.7l2.88 3.6q.56.7-.34.7H4.65q-.9 0-.34-.7l2.88-3.6q.56-.7-.34-.7H6.4q-.9 0-.36-.72l2.67-3.56q.54-.72-.33-.72q-.88 0-.33-.71l3.4-4.33q.55-.71 1.1 0M12 18.5v2.75");
}
</style><path class="zaq7qe48h"/>`,
		"fallback": "iconoven:pine-tree",
	});
}

export default Component;
