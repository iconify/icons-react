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
		"content": `<style>.o5u06nbqs {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m-20-116a4 4 0 0 1-4 4H92v44a4 4 0 0 1-8 0v-44H72a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m80 0v48a4 4 0 0 1-8 0v-37.35l-21 24a4 4 0 0 1-6 0l-21-24V152a4 4 0 0 1-8 0v-48a4 4 0 0 1 7-2.63l25 28.56l25-28.56a4 4 0 0 1 7 2.63");
}
</style><path class="o5u06nbqs"/>`,
		"fallback": "ph:trademark-thin",
	});
}

export default Component;
