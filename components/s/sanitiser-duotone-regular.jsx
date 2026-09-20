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
		"content": `<style>.fo-cubb-j {
  d: path("M11 10V4h5");
}

.mcuujfb5l {
  d: path("M16 4v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.phi1ncbih {
  d: path("M6 15h10");
}

.uvo4kondn {
  fill: currentColor;
  d: path("M6 21V10h10v11Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xz6r43u8w {
  d: path("M6 21V10h10v11Z");
}
</style><g class="nrj6p8qat"><path class="uvo4kondn"/><path class="xz6r43u8w"/><path class="fo-cubb-j"/><path class="mcuujfb5l"/><path class="phi1ncbih"/></g>`,
		"fallback": "iconmind:sanitiser-duotone-regular",
	});
}

export default Component;
