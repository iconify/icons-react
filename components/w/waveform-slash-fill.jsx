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
		"content": `<style>.ae_v_hbvj {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 56a8 8 0 0 1 16 0v50.75a8 8 0 0 1-16 0Zm-32 8a8 8 0 0 1 16 0v10.75a8 8 0 0 1-16 0Zm-80 48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm125.66 45.66a8 8 0 0 1-11.32 0L136 147.31V168a8 8 0 0 1-16 0v-36.69l-16-16V184a8 8 0 0 1-16 0V99.32L58.34 69.66a8 8 0 0 1 11.32-11.32l128 128a8 8 0 0 1 0 11.32");
}
</style><path class="ae_v_hbvj"/>`,
		"fallback": "ph:waveform-slash-fill",
	});
}

export default Component;
