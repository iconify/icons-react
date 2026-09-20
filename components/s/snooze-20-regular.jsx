import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o4r_8rbga {
  fill: currentColor;
  d: path("M10.5 4a.5.5 0 0 0 0 1h4.028l-4.435 6.21a.5.5 0 0 0 .407.79h5a.5.5 0 0 0 0-1h-4.028l4.435-6.21A.5.5 0 0 0 15.5 4zm-6 6a.5.5 0 0 0 0 1h2.96l-3.35 4.188A.5.5 0 0 0 4.5 16h4a.5.5 0 0 0 0-1H5.54l3.35-4.188A.5.5 0 0 0 8.5 10z");
}
</style><path class="o4r_8rbga"/>`,
		"fallback": "fluent:snooze-20-regular",
	});
}

export default Component;
