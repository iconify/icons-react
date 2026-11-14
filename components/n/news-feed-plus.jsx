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
		"content": `<style>.d7o2ez0pg {
  d: path("M12.2 20.5H2.5v-18h18v9.7M6 6.5h11");
}

.phb_cwxlg {
  d: path("M6 9.75h5.5v5.5H6Zm8.25.5H17M18 15v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d7o2ez0pg"/><path class="phb_cwxlg"/></g>`,
		"fallback": "uix-sharp:news-feed-plus",
	});
}

export default Component;
