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
		"content": `<style>.l48yz708p {
  fill: currentColor;
  d: path("M12 3.5 21.5 20h-19Z");
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

.ok2vcf7lv {
  d: path("M13.5 10 11 12.5h2.5L11 15");
}

.uweslxo3x {
  d: path("M12 3.5 21.5 20h-19Z");
}
</style><g class="nrj6p8qat"><path class="l48yz708p"/><path class="uweslxo3x"/><path class="ok2vcf7lv"/></g>`,
		"fallback": "iconmind:storm-warning-duotone-regular",
	});
}

export default Component;
