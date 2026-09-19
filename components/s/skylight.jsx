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
		"content": `<style>.vbxvh4bkw {
  d: path("M11.618 38.208L7.748 16.38L26.574 4.5L30.6 26.226z");
}

.vjn6upboo {
  d: path("m28.572 14.622l7.652-4.83L40.25 31.52L21.269 43.5l-1.811-10.217");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="vbxvh4bkw"/><path class="vjn6upboo"/></g>`,
		"fallback": "arcticons:skylight",
	});
}

export default Component;
