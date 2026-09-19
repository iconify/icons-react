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
		"content": `<style>.so_zzrb4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.484 14.135l7.265 19.729l7.265-19.729H28.9l-4.151 11.279l-4.151-11.279H4.51v3.115h6.4v16.614h3.115V17.25h4.608m21.623 11.184c0-1.818 1.448-3.291 3.233-3.291m-3.233 0v8.722m-3.742-1.661a3.22 3.22 0 0 1-2.81 1.661c-1.785 0-3.232-1.474-3.232-3.291v-2.14c0-1.818 1.447-3.291 3.233-3.291s3.233 1.473 3.233 3.291v1.07h-6.466");
}
</style><path class="so_zzrb4i"/>`,
		"fallback": "arcticons:tver",
	});
}

export default Component;
