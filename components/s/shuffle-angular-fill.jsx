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
		"content": `<style>.dpfwkutpt {
  fill: currentColor;
  d: path("M237.66 178.34a8 8 0 0 1 0 11.32l-24 24A8 8 0 0 1 200 208v-16h-32a8 8 0 0 1-6.51-3.35L83.88 80H32a8 8 0 0 1 0-16h56a8 8 0 0 1 6.51 3.35L172.12 176H200v-16a8 8 0 0 1 13.66-5.66ZM143 107a8 8 0 0 0 11.16-1.86l18-25.12H200V96a8 8 0 0 0 13.66 5.66l24-24a8 8 0 0 0 0-11.32l-24-24A8 8 0 0 0 200 48v16h-32a8 8 0 0 0-6.51 3.35l-20.34 28.47A8 8 0 0 0 143 107m-30 42a8 8 0 0 0-11.16 1.86L83.88 176H32a8 8 0 0 0 0 16h56a8 8 0 0 0 6.51-3.35l20.34-28.47A8 8 0 0 0 113 149");
}
</style><path class="dpfwkutpt"/>`,
		"fallback": "ph:shuffle-angular-fill",
	});
}

export default Component;
