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
		"content": `<style>.vglhzc5ti {
  fill: currentColor;
  d: path("M106 40a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6m38 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-176h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14m8 72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12M52.44 36a6 6 0 0 0-8.88 8l160 176a6 6 0 0 0 8.88-8.08Z");
}
</style><path class="vglhzc5ti"/>`,
		"fallback": "ph:selection-slash-light",
	});
}

export default Component;
