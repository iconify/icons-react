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
		"content": `<style>.zep64_z6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.68 28.544c.854 0 1.542.688 1.542 1.542v5.556c0 .855.688 1.542 1.542 1.542h5.968c.854 0 1.542-.687 1.542-1.542v-5.556c0-.854.688-1.542 1.542-1.542h5.556c.855 0 1.542-.688 1.542-1.542v-5.968c0-.854-.687-1.542-1.542-1.542h-5.556a1.54 1.54 0 0 1-1.542-1.542v-5.556c0-.854-.688-1.542-1.542-1.542h-5.968c-.854 0-1.542.688-1.542 1.542v5.556c0 .854-.688 1.542-1.542 1.542H6.554V6.79h26.668a8.207 8.207 0 0 1 8.225 8.225v.761A8.207 8.207 0 0 1 33.222 24a8.207 8.207 0 0 1 8.225 8.225v.76a8.207 8.207 0 0 1-8.225 8.226H6.554V28.544z");
}
</style><path class="zep64_z6n"/>`,
		"fallback": "arcticons:my-bplus",
	});
}

export default Component;
