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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.k7cz9qivc {
  d: path("M18 11v5");
}

.o759xmblc {
  d: path("M6 8v8");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.wew0vnk_n {
  d: path("M12 5v14");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="rkhcgsbdl"/><path class="o759xmblc"/><path class="wew0vnk_n"/><path class="k7cz9qivc"/></g>`,
		"fallback": "iconmind:normalize-data-outline-thin",
	});
}

export default Component;
