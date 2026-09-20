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
		"content": `<style>.kirvfo_6b {
  fill: currentColor;
  d: path("M246 113.46L142.54 10a20.57 20.57 0 0 0-29.08 0L10 113.46a20.57 20.57 0 0 0 0 29.08L113.46 246a20.57 20.57 0 0 0 29.08 0L246 142.54a20.57 20.57 0 0 0 0-29.08M128 226.57L29.43 128L128 29.43L226.57 128Zm7.51-122.08a12 12 0 0 1 17-17l24 24a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L139 132h-27a12 12 0 0 0-12 12v4a12 12 0 0 1-24 0v-4a36 36 0 0 1 36-36h27Z");
}
</style><path class="kirvfo_6b"/>`,
		"fallback": "ph:traffic-sign-bold",
	});
}

export default Component;
