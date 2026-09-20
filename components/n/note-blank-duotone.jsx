import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.eu_696b5l {
  d: path("m216 160l-56 56v-56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jry7u0bpo {
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.69a15.86 15.86 0 0 0 11.31-4.69L219.31 168a15.86 15.86 0 0 0 4.69-11.31V48a16 16 0 0 0-16-16M48 48h160v104h-48a8 8 0 0 0-8 8v48H48Zm148.69 120L168 196.69V168Z");
}
</style><g class="cuyn6tgcc"><path class="eu_696b5l"/><path class="jry7u0bpo"/></g>`,
		"fallback": "ph:note-blank-duotone",
	});
}

export default Component;
