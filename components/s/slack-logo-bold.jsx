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
		"content": `<style>.znqgg354k {
  fill: currentColor;
  d: path("M236 104a36 36 0 0 0-48-33.94V56a36 36 0 0 0-60-26.8A36 36 0 0 0 70.06 68H56a36 36 0 0 0-26.8 60A36 36 0 0 0 68 185.94V200a36 36 0 0 0 60 26.8a36 36 0 0 0 57.94-38.8H200a36 36 0 0 0 26.8-60a35.82 35.82 0 0 0 9.2-24m-36-12a12 12 0 0 1 0 24h-12v-12a12 12 0 0 1 12-12m-48-48a12 12 0 0 1 12 12v48a12 12 0 0 1-12 12h-12V56a12 12 0 0 1 12-12M92 56a12 12 0 0 1 24 0v12h-12a12 12 0 0 1-12-12M56 92h48a12 12 0 0 1 12 12v12H56a12 12 0 0 1 0-24m0 72a12 12 0 0 1 0-24h12v12a12 12 0 0 1-12 12m48 48a12 12 0 0 1-12-12v-48a12 12 0 0 1 12-12h12v60a12 12 0 0 1-12 12m60-12a12 12 0 0 1-24 0v-12h12a12 12 0 0 1 12 12m36-36h-48a12 12 0 0 1-12-12v-12h60a12 12 0 0 1 0 24");
}
</style><path class="znqgg354k"/>`,
		"fallback": "ph:slack-logo-bold",
	});
}

export default Component;
