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
		"content": `<style>.entdgs0no {
  d: path("M3 5h18v6H3Z");
}

.f8gsx7b5s {
  d: path("M6 8h12");
}

.lrgwget7i {
  fill: currentColor;
  d: path("M3 5h18v6H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q30lbsbyl {
  d: path("M3 14h18v6H3Z");
}

.rvot348of {
  fill: currentColor;
  d: path("M3 14h18v6H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vn9zmkbyj {
  d: path("M12 17h6");
}
</style><g class="nrj6p8qat"><path class="lrgwget7i"/><path class="rvot348of"/><path class="entdgs0no"/><path class="q30lbsbyl"/><path class="f8gsx7b5s"/><path class="vn9zmkbyj"/></g>`,
		"fallback": "iconmind:shade-tint-duotone-regular",
	});
}

export default Component;
