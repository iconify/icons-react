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
		"content": `<style>.iy-5zgbfz {
  fill: currentColor;
  d: path("M8.09 17H7v-4h3.69c.95-.63 2.09-1 3.31-1h6c.34 0 .67.04 1 .09V3H3v18h5.81C8.3 20.12 8 19.09 8 18c0-.34.04-.67.09-1M13 7h4v4h-4zM7 7h4v4H7z");
}

.nxrljjbua {
  fill: currentColor;
  d: path("M12 18c0-1.1.9-2 2-2h2v-2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2h-2c-1.1 0-2-.9-2-2m8-4h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4");
}

.p93bndb6w {
  fill: currentColor;
  d: path("M14 17h6v2h-6z");
}
</style><path class="iy-5zgbfz"/><path class="nxrljjbua"/><path class="p93bndb6w"/>`,
		"fallback": "ic:sharp-dataset-linked",
	});
}

export default Component;
