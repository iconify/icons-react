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
		"content": `<style>.eq1qy8wwa {
  d: path("M5 7L2 7M22 7L9 7");
}

.f3o8v2b6s {
  d: path("M19 12H16M12 12L5 12");
}

.fml2qzxuh {
  d: path("M16 17H8");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><path class="eq1qy8wwa"/><path class="f3o8v2b6s"/><path class="fml2qzxuh"/></g>`,
		"fallback": "solar:sort-broken",
	});
}

export default Component;
