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
		"content": `<style>.aauqhyb-w {
  fill: currentColor;
  d: path("M21.708 3.293a1 1 0 0 0-1.415 0L19 4.586l-.292-.293a1 1 0 1 0-1.415 1.414l1 1a1 1 0 0 0 1.415 0l2-2a1 1 0 0 0 0-1.414M3 16.993h11.004a1 1 0 0 1 .117 1.994l-.117.006H3A1 1 0 0 1 2.883 17zM3 11h11.004a1 1 0 0 1 .117 1.993l-.117.007H3a1 1 0 0 1-.117-1.993zm0-6h11.004a1 1 0 0 1 .117 1.993L14.003 7H3a1 1 0 0 1-.117-1.993zm17.293 11.293a1 1 0 0 1 1.415 1.414l-2 2a1 1 0 0 1-1.415 0l-1-1a1 1 0 0 1 1.415-1.414l.293.293z");
}
</style><path class="aauqhyb-w"/>`,
		"fallback": "fluent:multiselect-rtl-24-filled",
	});
}

export default Component;
