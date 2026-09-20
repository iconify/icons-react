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
		"content": `<style>.v9amh-b1p {
  fill: currentColor;
  d: path("M7.499 3.5a1.5 1.5 0 1 1-2.999 0a1.5 1.5 0 0 1 2.999 0m-.5 4v13.503a1 1 0 0 1-1.993.117L5 21.003V7.5a1 1 0 0 1 1.994-.116zm6.5-4a1.5 1.5 0 1 1-2.999 0a1.5 1.5 0 0 1 2.999 0m-.5 4v13.503a1 1 0 0 1-1.993.117L11 21.003V7.5a1 1 0 0 1 1.994-.116zm6.493-4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-.493 4v13.503a1 1 0 0 1-1.994.117L17 21.003V7.5a1 1 0 0 1 1.993-.116z");
}
</style><path class="v9amh-b1p"/>`,
		"fallback": "fluent:text-bullet-list-ltr-90-24-filled",
	});
}

export default Component;
