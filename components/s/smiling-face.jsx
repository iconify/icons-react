import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d-qwrnb2j {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M63.79 8.64C1.48 8.64 0 78.5 0 92.33s28.56 25.03 63.79 25.03c35.24 0 63.79-11.21 63.79-25.03c0-13.83-1.47-83.69-63.79-83.69");
}

.ijvk_bsqc {
  fill: var(--svg-color--2f2f2f, #2f2f2f);
  d: path("M42.21 66.47c-4.49.04-8.17-4.27-8.22-9.62c-.05-5.37 3.55-9.75 8.04-9.79c4.48-.04 8.17 4.27 8.22 9.64c.05 5.36-3.55 9.73-8.04 9.77m44.11 0c4.48-.01 8.11-4.36 8.1-9.71c-.01-5.37-3.66-9.7-8.14-9.69c-4.49.01-8.13 4.36-8.12 9.73c.02 5.35 3.67 9.68 8.16 9.67");
}

.kkb5p6y8z {
  fill: none;
  stroke: var(--svg-color--2f2f2f, #2f2f2f);
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: var(--svg-stroke-width--6px, 6px);
  d: path("M36.19 81.17c13.73 16.67 41.89 16.67 55.62 0");
}
</style><path class="d-qwrnb2j"/><path class="ijvk_bsqc"/><path class="kkb5p6y8z"/>`,
		"fallback": "noto-v1:smiling-face",
	});
}

export default Component;
