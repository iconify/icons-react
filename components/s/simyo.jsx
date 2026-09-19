import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zwp_kzbgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.164 15.492c0-4.069-2.794-6.471-9-6.471h-16.63c-4.17 0-9.257.01-9.257 7.886c0 6.077 4.505 6.538 9.168 6.784c3.771.199 13.964-.095 19.083.27c6.768.483 7.846 3.286 7.965 6.96c.12 3.77-1.135 7.646-9.276 7.819c-7.585.161-9.96.24-17.255.24c-6.225 0-10.462-2.167-10.462-7.414");
}
</style><path class="zwp_kzbgg"/>`,
		"fallback": "arcticons:simyo",
	});
}

export default Component;
