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
		"content": `<style>.f0nhpsynn {
  cx: 12px;
  cy: 6px;
  r: 4px;
  fill: currentColor;
}

.rarrkzbto {
  cx: 12px;
  cy: 17px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-5, 0.5);
  rx: 7px;
  ry: 4px;
}
</style><circle class="f0nhpsynn"/><ellipse class="rarrkzbto"/>`,
		"fallback": "solar:user-rounded-bold-duotone",
	});
}

export default Component;
