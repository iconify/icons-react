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
		"content": `<style>.n5hvd5bvt {
  fill: currentColor;
  d: path("M239 66.75A20.12 20.12 0 0 0 224 60h-44.17a52 52 0 0 0-103.66 0H32.08a20 20 0 0 0-19.94 22.35l14.25 120A20.06 20.06 0 0 0 46.33 220h163.34a20.06 20.06 0 0 0 19.94-17.65l14.25-120a20 20 0 0 0-4.86-15.6M128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36m78.19 160H49.81L36.5 84h183Z");
}
</style><path class="n5hvd5bvt"/>`,
		"fallback": "ph:tote-simple-bold",
	});
}

export default Component;
