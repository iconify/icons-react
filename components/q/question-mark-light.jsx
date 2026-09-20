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
		"content": `<style>.dok8n2byj {
  fill: currentColor;
  d: path("M190 96c0 28-24.62 51.11-56 53.75V160a6 6 0 0 1-12 0v-16a6 6 0 0 1 6-6c27.57 0 50-18.84 50-42s-22.43-42-50-42s-50 18.84-50 42a6 6 0 0 1-12 0c0-29.78 27.81-54 62-54s62 24.22 62 54m-62 98a14 14 0 1 0 14 14a14 14 0 0 0-14-14");
}
</style><path class="dok8n2byj"/>`,
		"fallback": "ph:question-mark-light",
	});
}

export default Component;
