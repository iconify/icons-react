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
		"content": `<style>.bqdxtvbui {
  d: path("M6.75 9.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-1 10.25c0-2.75 1.5-4.5 3.75-4.5c1.485 0 2.644.763 3.26 2.072m5.74-1.822l3.25 3.25l-3.25 3.25l-3.25-3.25Z");
}

.tsbyu22qc {
  d: path("M12.3 19.5H2.5v-17h17v9.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tsbyu22qc"/><path class="bqdxtvbui"/></g>`,
		"fallback": "uix-sharp:nft-avatar",
	});
}

export default Component;
