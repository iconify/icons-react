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
		"content": `<style>.mfw8gbgyh {
  d: path("M8 21v-3.5c-2.5-1.75-3.5-4.25-3.5-7C4.5 6.25 7.75 3 12 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5 0 1-.75 1H19v2.25a2 2 0 0 1-2 2h-2V21");
}

.njsw7rn9p {
  d: path("M11.75 7c1.25 1 1.25 3 0 4.5C10.5 10 10.5 8 11.75 7Z");
}

.ope9k8wdx {
  d: path("M11.75 11.5c-1.5 0-3-1-3.5-2.5c1.5 0 3 1 3.5 2.5m0 0c1.5 0 3-1 3.5-2.5c-1.5 0-3 1-3.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mfw8gbgyh"/><path class="njsw7rn9p"/><path class="ope9k8wdx"/></g>`,
		"fallback": "uix-sharp:mindfulness",
	});
}

export default Component;
