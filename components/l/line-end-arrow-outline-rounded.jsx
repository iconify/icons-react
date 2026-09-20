import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ydhnl805j {
  fill: currentColor;
  d: path("M13.429 16.044q-.404.268-.82.032q-.417-.236-.417-.728V12.5H3.577q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h8.615V8.652q0-.492.417-.728q.416-.236.82.032l5.285 3.367q.378.238.378.675t-.378.679zm-.237-1.04L17.91 12l-4.718-3.004zm0-3.004");
}
</style><path class="ydhnl805j"/>`,
		"fallback": "material-symbols-light:line-end-arrow-outline-rounded",
	});
}

export default Component;
