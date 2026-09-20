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
		"content": `<style>.foh001qai {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i_61jzbqt {
  d: path("M4 8v8");
}

.i4kf51esh {
  d: path("M19 5v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok_rnynvm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.st-dlsdww {
  d: path("M14 8v8");
}

.x2s41ccgb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xrql42b0y {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zto18nxmz {
  d: path("M9 5v14");
}
</style><g class="nrj6p8qat"><path class="ok_rnynvm"/><path class="x2s41ccgb"/><path class="foh001qai"/><path class="xrql42b0y"/><path class="i_61jzbqt"/><path class="zto18nxmz"/><path class="st-dlsdww"/><path class="i4kf51esh"/></g>`,
		"fallback": "iconmind:rhythm-duotone-regular",
	});
}

export default Component;
