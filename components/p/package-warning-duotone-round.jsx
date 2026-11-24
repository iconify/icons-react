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
		"content": `<style>.a7v4-_bqg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 6c.613-1.226 1.774-2 3-2h8c1.226 0 2.387.774 3 2l1 2v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zM4 8h16m-8 3v3m0 3h.01");
}

.ft5dv1b6b {
  fill: none;
}

.ftbyj6eil {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 6c.569-1.137 1.695-1.999 3-2h8c1.305.001 2.431.863 3 2l1 2H4Z");
}
</style><g class="ft5dv1b6b"><path class="ftbyj6eil"/><path class="a7v4-_bqg"/></g>`,
		"fallback": "coolicons:package-warning-duotone-round",
	});
}

export default Component;
