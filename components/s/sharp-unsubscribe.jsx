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
		"content": `<style>.pxxmt9idv {
  fill: currentColor;
  d: path("M18.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m2 4h-4v-1h4zm-6.95 0c-.02-.17-.05-.33-.05-.5c0-2.76 2.24-5 5-5c.92 0 1.75.26 2.49.69V3H3v14zM12 10.5L5 7V5l7 3.5L19 5v2z");
}
</style><path class="pxxmt9idv"/>`,
		"fallback": "ic:sharp-unsubscribe",
	});
}

export default Component;
