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
		"content": `<style>.a3s-ix6ox {
  d: path("M12 9.5v6");
}

.gh1jtrbuw {
  d: path("M9.5 12 12 9.5l2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}
</style><g class="hntgybcog"><path class="n09nomjwg"/><path class="a3s-ix6ox"/><path class="gh1jtrbuw"/></g>`,
		"fallback": "iconmind:status-update-outline-thin",
	});
}

export default Component;
