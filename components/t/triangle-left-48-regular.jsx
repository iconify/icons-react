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
		"content": `<style>.rjh3kiycn {
  fill: currentColor;
  d: path("M8.435 22.241c-1.239.652-1.249 2.422-.017 3.088l29.501 15.954a1.75 1.75 0 0 0 2.583-1.54V8.256a1.75 1.75 0 0 0-2.566-1.549zm-1.207 5.287c-2.99-1.617-2.966-5.915.042-7.499L36.772 4.495c2.83-1.49 6.23.562 6.23 3.76v31.488c0 3.22-3.44 5.27-6.272 3.739z");
}
</style><path class="rjh3kiycn"/>`,
		"fallback": "fluent:triangle-left-48-regular",
	});
}

export default Component;
