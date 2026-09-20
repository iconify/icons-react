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
		"content": `<style>.rxxn1rblh {
  fill: currentColor;
  d: path("M222 160a6 6 0 0 1-6 6H101.56l-49.12 54a6 6 0 1 1-8.88-8l41.79-46H40a6 6 0 0 1 0-12h56.25l47.28-52H40a6 6 0 0 1 0-12h114.44l49.12-54a6 6 0 1 1 8.88 8l-41.79 46H216a6 6 0 0 1 0 12h-56.25l-47.28 52H216a6 6 0 0 1 6 6");
}
</style><path class="rxxn1rblh"/>`,
		"fallback": "ph:not-equals-light",
	});
}

export default Component;
