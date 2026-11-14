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
		"content": `<style>.p_kxr_aze {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 3.75q0-1.5-1.5-1.5T6 3.75v.543q-.121-.043-.25-.043H3.5q-2.25 0-2.25 2.25v3q0 2.25 2.25 2.25h2.25q.129 0 .25-.043v.543q0 1.5 1.5 1.5t1.5-1.5v-.543q.121.043.25.043h2.5q.129 0 .25-.043v.543q0 1.5 1.5 1.5q.341 0 .604-.077q.249-.195.555-.333q.341-.374.341-1.09v-.543q.121.043.25.043h5.25q2.25 0 2.25-2.25v-3q0-2.25-2.25-2.25h-5.25q-.129 0-.25.043V3.75q0-1.5-1.5-1.5T12 3.75v.543q-.121-.043-.25-.043h-2.5q-.129 0-.25.043zm-3.25 2q.129 0 .25-.043v4.586q-.121-.043-.25-.043H3.5q-.75 0-.75-.75v-3q0-.75.75-.75zM12 5.707v4.586q-.121-.043-.25-.043h-2.5q-.129 0-.25.043V5.707q.121.043.25.043h2.5q.129 0 .25-.043m3 0q.121.043.25.043h5.25q.75 0 .75.75v3q0 .75-.75.75h-5.25q-.129 0-.25.043zm1.5 8.543h3q2.25 0 2.25 2.25v3q0 2.25-2.25 2.25h-3q-2.25 0-2.25-2.25v-3q0-2.25 2.25-2.25m0 1.5q-.75 0-.75.75v3q0 .75.75.75h3q.75 0 .75-.75v-3q0-.75-.75-.75z");
}
</style><path class="p_kxr_aze"/>`,
		"fallback": "uix-solid:pipeline-stop",
	});
}

export default Component;
