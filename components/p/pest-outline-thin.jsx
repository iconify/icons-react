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
		"content": `<style>.awe370b_p {
  d: path("m17 10 3 -3");
}

.bpusavzao {
  d: path("M7 10 4 7");
}

.g06ri4k9s {
  d: path("m17 16 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n674gpzmi {
  d: path("m7 16 -3 3");
}

.tf_3zacif {
  d: path("M12 6c3 0 5 3 5 7s-2 7 -5 7 -5 -3 -5 -7 2 -7 5 -7");
}
</style><g class="hntgybcog"><path class="tf_3zacif"/><path class="bpusavzao"/><path class="awe370b_p"/><path class="n674gpzmi"/><path class="g06ri4k9s"/></g>`,
		"fallback": "iconmind:pest-outline-thin",
	});
}

export default Component;
