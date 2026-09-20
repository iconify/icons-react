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
		"content": `<style>.f4jmi7f2e {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.028 8.049a.8.8 0 0 0-.874-.277a.76.76 0 0 0-.541.716v1.505H6.789v1.504h1.824v1.004H6.789v1.504h1.824v2.257h1.563V10.82l3.795 5.071a.8.8 0 0 0 .874.276c.323-.1.541-.39.541-.716v-1.446h1.824V12.5h-1.824v-1.003h1.824V9.993h-1.824V7.736h-1.563v5.384z");
}

.ft5dv1b6b {
  fill: none;
}

.kwuuvwbzr {
  fill: var(--svg-color--fff, #fff);
  d: path("M21 3H3v18h18z");
}

.p455_dbgr {
  fill: var(--svg-color--000, #000);
  d: path("M21 12a9 9 0 1 0-18 0a9 9 0 0 0 18 0");
}
</style><g class="ft5dv1b6b"><path class="kwuuvwbzr"/><path class="p455_dbgr"/><path class="f4jmi7f2e"/></g>`,
		"fallback": "token-branded:usn",
	});
}

export default Component;
