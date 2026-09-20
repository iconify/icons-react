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
		"content": `<style>.dpau70c4l {
  fill: currentColor;
  d: path("M98 54V40a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v32a14 14 0 0 1-14 14h-16.39a6 6 0 0 1 0-12H144a2 2 0 0 0 2-2V40a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2v14a6 6 0 0 1-12 0m114.44 158a6 6 0 0 1-8.88 8.08l-85.49-94H70v36h10a14 14 0 0 1 14 14v32a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V176a14 14 0 0 1 14-14h10v-36H24a6 6 0 0 1 0-12h83.16l-63.6-70a6 6 0 0 1 8.88-8ZM80 174H48a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2v-32a2 2 0 0 0-2-2m152-60h-68a6 6 0 0 0 0 12h22v24.83a6 6 0 1 0 12 0V126h34a6 6 0 0 0 0-12");
}
</style><path class="dpau70c4l"/>`,
		"fallback": "ph:network-slash-light",
	});
}

export default Component;
