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
		"content": `<style>.dqdll7bts {
  d: path("M9.5 6.5 12 4l2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.zx9kn83ea {
  d: path("M12 4v8");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="zx9kn83ea"/><path class="dqdll7bts"/></g>`,
		"fallback": "iconmind:otel-exporter-outline-thin",
	});
}

export default Component;
