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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wmdz_xjsf {
  d: path("M5 4H19C20.65685 4 22 5.34315 22 7V17C22 18.65685 20.65685 20 19 20H5C3.34315 20 2 18.65685 2 17V7C2 5.34315 3.34315 4 5 4ZM6 10H8M12 10H18M6 14H12M16 14H18");
}
</style><g class="nrj6p8qat"><path class="atvej9eay"/><path class="wmdz_xjsf"/></g>`,
		"fallback": "keyline-icons:subtitles-two-tone",
	});
}

export default Component;
