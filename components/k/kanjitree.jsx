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
		"content": `<style>.u--hs3bfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v37M6.704 16.092h34.592m-17.296 0c0 4.964-12.925 16.087-17.24 18.88M24 16.092c0 4.964 12.925 16.087 17.24 18.88");
}
</style><path class="u--hs3bfk"/>`,
		"fallback": "arcticons:kanjitree",
	});
}

export default Component;
