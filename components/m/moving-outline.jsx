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
		"content": `<style>.r8axbvlae {
  fill: currentColor;
  d: path("m3.304 17.308l-.708-.708l4.954-4.954q.74-.721 1.77-.73q1.028-.01 1.769.73l1.15 1.15q.453.454 1.068.445q.614-.01 1.068-.445L19.691 7.5h-3.287v-1h5v5h-1V8.214l-5.321 5.296q-.74.72-1.78.73q-1.038.01-1.759-.711l-1.175-1.175q-.448-.448-1.056-.438q-.607.009-1.055.438z");
}
</style><path class="r8axbvlae"/>`,
		"fallback": "material-symbols-light:moving-outline",
	});
}

export default Component;
