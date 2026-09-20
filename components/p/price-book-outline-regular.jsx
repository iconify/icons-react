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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.teszqoqtj {
  d: path("M5.5 10.5v3");
}

.x1_r36phd {
  d: path("M9 12h6");
}

.zqsgc7abe {
  d: path("M18.5 10.5v3");
}
</style><g class="nrj6p8qat"><path class="nnzlfsekh"/><path class="teszqoqtj"/><path class="zqsgc7abe"/><path class="jlfjgzbqx"/><path class="x1_r36phd"/><path class="ae0h5kb0o"/></g>`,
		"fallback": "iconmind:price-book-outline-regular",
	});
}

export default Component;
