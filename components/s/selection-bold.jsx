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
		"content": `<style>.v7fs98uah {
  fill: currentColor;
  d: path("M156 40a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m-12 164h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m64-176h-24a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0V48a20 20 0 0 0-20-20m8 72a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m0 72a12 12 0 0 0-12 12v20h-20a12 12 0 0 0 0 24h24a20 20 0 0 0 20-20v-24a12 12 0 0 0-12-12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24m0-176H48a20 20 0 0 0-20 20v24a12 12 0 0 0 24 0V52h20a12 12 0 0 0 0-24");
}
</style><path class="v7fs98uah"/>`,
		"fallback": "ph:selection-bold",
	});
}

export default Component;
