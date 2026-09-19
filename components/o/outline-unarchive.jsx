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
		"content": `<style>.zh-2udbfb {
  fill: currentColor;
  d: path("m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.83 1H5.42zM5 19V8h14v11zm3-5h2.55v3h2.9v-3H16l-4-4z");
}
</style><path class="zh-2udbfb"/>`,
		"fallback": "ic:outline-unarchive",
	});
}

export default Component;
