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
		"content": `<style>.gu1pws8je {
  d: path("M10 18.5c-1.5 0-1.75-1.75 0-3.5c1.75 1.75 1.5 3.5 0 3.5Z");
}

.k8nu7-t-v {
  d: path("M8.5 4.25V2.5h3v1.75m6 8.75l3-2v9.5l-3 1m-12 0V14a4.5 4.5 0 0 1 9 0v7.5");
}

.qs64qgbaq {
  d: path("M2.5 21.5V11a7.5 7.5 0 0 1 15 0v10.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qs64qgbaq"/><path class="k8nu7-t-v"/><path class="gu1pws8je"/></g>`,
		"fallback": "uix-sharp:kiln-open",
	});
}

export default Component;
