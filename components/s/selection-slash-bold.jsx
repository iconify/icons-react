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
		"content": `<style>.llo62fblp {
  fill: currentColor;
  d: path("M100 40a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-32a12 12 0 0 1-12-12m44 164h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-176h-24a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0V48a20 20 0 0 0-20-20m8 72a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24M56.88 31.93a12 12 0 1 0-17.76 16.14l160 176a12 12 0 0 0 17.76-16.14Z");
}
</style><path class="llo62fblp"/>`,
		"fallback": "ph:selection-slash-bold",
	});
}

export default Component;
