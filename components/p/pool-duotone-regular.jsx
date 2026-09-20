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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.eoz5n0suo {
  d: path("m4 11 2.5 -2.5L9 11l2.5 -2.5L14 11l2.5 -2.5L19 11");
}

.fqc62vs0s {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 11 2.5 -2.5L9 11l2.5 -2.5L14 11l2.5 -2.5L19 11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.szg40d_7w {
  d: path("M2 7v8h20V7");
}

.xdhl9rnnf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 18h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zzgamza2c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 7v8h20V7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="zzgamza2c"/><path class="fqc62vs0s"/><path class="xdhl9rnnf"/><path class="szg40d_7w"/><path class="eoz5n0suo"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:pool-duotone-regular",
	});
}

export default Component;
