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
		"content": `<style>.atvej9eay {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 3H19C21.20914 3 23 4.79086 23 7V17C23 19.20914 21.20914 21 19 21H5C2.79086 21 1 19.20914 1 17V7C1 4.79086 2.79086 3 5 3Z");
  stroke: none;
}

.g4ysu3bum {
  d: path("M6 10L8 10M12 10L18 10M6 14L12 14M16 14L18 14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="atvej9eay"/><path class="g4ysu3bum"/></g>`,
		"fallback": "keyline-icons:subtitles-duotone",
	});
}

export default Component;
