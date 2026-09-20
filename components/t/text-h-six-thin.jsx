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
		"content": `<style>.g2rk93bxt {
  fill: currentColor;
  d: path("M212 148a32 32 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.25 54a1 1 0 0 0-.08.17A32 32 0 1 0 212 148m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0");
}
</style><path class="g2rk93bxt"/>`,
		"fallback": "ph:text-h-six-thin",
	});
}

export default Component;
