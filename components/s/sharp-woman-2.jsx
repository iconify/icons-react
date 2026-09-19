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
		"content": `<style>.xlixpg-ec {
  fill: currentColor;
  d: path("M13.41 7h-2.82L7 16h3.5v6h3v-6H17z");
}

.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}
</style><path class="xlixpg-ec"/><circle class="yfz3w9lrl"/>`,
		"fallback": "ic:sharp-woman-2",
	});
}

export default Component;
