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
		"content": `<style>.fhms5fbgt {
  fill: currentColor;
  d: path("M16 6v3h2a3 3 0 0 1 3 3v7q0 .345-.077.68L10.243 9H14V6a2 2 0 0 0-4 0a1 1 0 0 1-2 0a4 4 0 0 1 8 0M2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414L17.586 22H6a3 3 0 0 1-3-3v-7c0-1.204.717-2.291 1.825-2.761L1.293 5.707a.999.999 0 1 1 1.414-1.414");
}
</style><path class="fhms5fbgt"/>`,
		"fallback": "coolicons:lock-off-fill",
	});
}

export default Component;
