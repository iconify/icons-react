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
		"content": `<style>.c3nhkv2au {
  d: path("M12 21v-9h4.5m-9 0v4.5");
}

.rfqqbwbhu {
  d: path("M8 3h11a2 2 0 0 1 2 2v11M3 8v11a2 2 0 0 0 2 2h16M7.5 7.5h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rfqqbwbhu"/><path class="c3nhkv2au"/></g>`,
		"fallback": "uix-sharp:maze-game",
	});
}

export default Component;
