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
		"content": `<style>.kbcmm5vzc {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h108.69a19.86 19.86 0 0 0 14.14-5.86l51.31-51.31a19.86 19.86 0 0 0 5.86-14.14V48a20 20 0 0 0-20-20M52 52h152v92h-48a12 12 0 0 0-12 12v48H52Zm116 139v-23h23Z");
}
</style><path class="kbcmm5vzc"/>`,
		"fallback": "ph:note-blank-bold",
	});
}

export default Component;
