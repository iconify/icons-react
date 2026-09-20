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
		"content": `<style>.kedzeybqi {
  fill: currentColor;
  d: path("M26 128a70.08 70.08 0 0 1 70-70h113.51l-13.75-13.76a6 6 0 0 1 8.48-8.48l24 24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L209.51 70H96a58.07 58.07 0 0 0-58 58a6 6 0 0 1-12 0m198-6a6 6 0 0 0-6 6a58.07 58.07 0 0 1-58 58H46.49l13.75-13.76a6 6 0 0 0-8.48-8.48l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 0 0 8.48-8.48L46.49 198H160a70.08 70.08 0 0 0 70-70a6 6 0 0 0-6-6m-88 36a6 6 0 0 0 6-6v-48a6 6 0 0 0-8.68-5.37l-16 8a6 6 0 1 0 5.36 10.73l7.32-3.66V152a6 6 0 0 0 6 6");
}
</style><path class="kedzeybqi"/>`,
		"fallback": "ph:repeat-once-light",
	});
}

export default Component;
