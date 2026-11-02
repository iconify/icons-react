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
		"content": `<style>.uxwld8isk {
  fill: currentColor;
  d: path("M8 5H7v14h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V5H4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m6 2a1 1 0 0 1 2 0c0 1.07.311 2.146 1.082 2.918c.348.348.771.613 1.23.789A4.7 4.7 0 0 0 20 11a1 1 0 0 1 0 2c-.574 0-1.151.086-1.688.293a3.5 3.5 0 0 0-1.23.789a3.5 3.5 0 0 0-.789 1.23A4.7 4.7 0 0 0 16 17a1 1 0 0 1-2 0c0-.574-.086-1.151-.293-1.688a3.5 3.5 0 0 0-.789-1.23C12.146 13.311 11.07 13 10 13a1 1 0 0 1 0-2c2.444 0 4-1.556 4-4");
}
</style><path class="uxwld8isk"/>`,
		"fallback": "coolicons:prompt-fill-round",
	});
}

export default Component;
