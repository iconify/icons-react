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
		"content": `<style>.njhjk2bvl {
  fill: currentColor;
  d: path("M249.89 76.47a4 4 0 0 0-4.11.2L204 104.53V72a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-32.53l41.78 27.86A4 4 0 0 0 252 176V80a4 4 0 0 0-2.11-3.53M196 184a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm48-15.47l-40-26.67v-27.72l40-26.67Z");
}
</style><path class="njhjk2bvl"/>`,
		"fallback": "ph:video-camera-thin",
	});
}

export default Component;
