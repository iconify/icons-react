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
		"content": `<style>.f59axuhhu {
  d: path("M4.5 4.5 7 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldfbmybql {
  d: path("M19.5 4.5 17 7");
}

.o-4bk_b4n {
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8");
}

.z9ittvbis {
  d: path("M2 19h20");
}

.zkgvk4bog {
  d: path("M12 2v3");
}
</style><g class="hntgybcog"><path class="o-4bk_b4n"/><path class="zkgvk4bog"/><path class="f59axuhhu"/><path class="ldfbmybql"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:noon-sun-outline-thin",
	});
}

export default Component;
