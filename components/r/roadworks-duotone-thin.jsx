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
		"content": `<style>.bcockwbin {
  fill: currentColor;
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cvoxr1bie {
  d: path("M12 4.5V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lrvpbmynw {
  fill: currentColor;
  d: path("M9.5 9v3.5h5V9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r8vbx7bdh {
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9");
}

.swh_ykb_p {
  d: path("M9.5 9v3.5h5V9Z");
}

.z475fobui {
  d: path("M12 16v6");
}
</style><g class="hntgybcog"><path class="bcockwbin"/><path class="lrvpbmynw"/><path class="r8vbx7bdh"/><path class="z475fobui"/><path class="cvoxr1bie"/><path class="swh_ykb_p"/></g>`,
		"fallback": "iconmind:roadworks-duotone-thin",
	});
}

export default Component;
