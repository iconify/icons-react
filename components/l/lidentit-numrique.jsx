import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c6nojbb-z {
  cx: 24px;
  cy: 7.581px;
  r: 3.081px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i-o6r7aol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.206 43.5V23.828a6.725 6.725 0 0 0-6.725-6.725H24V34.45M9.794 17.103v19.672A6.725 6.725 0 0 0 16.52 43.5H24");
}
</style><path class="i-o6r7aol"/><circle class="c6nojbb-z"/>`,
		"fallback": "arcticons:lidentit-numrique",
	});
}

export default Component;
