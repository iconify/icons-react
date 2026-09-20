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
		"content": `<style>.f4naz_w9a {
  d: path("m9 5 3 3 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jotk81b5q {
  d: path("M12 2v6");
}

.nl66y9men {
  d: path("M6 16h12");
}

.w2dozdlxo {
  d: path("M2 14a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="w2dozdlxo"/><path class="jotk81b5q"/><path class="f4naz_w9a"/><path class="nl66y9men"/></g>`,
		"fallback": "iconmind:stash-outline-thin",
	});
}

export default Component;
