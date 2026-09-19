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
		"content": `<style>.lj49oqsiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.511 24.493v11.173h11.137M35.677 16.6V5.5H24.541m-7.893 0H5.51v11.1m36.979 19.066h-6.812V42.5m-6.811-6.834h6.811V28.83");
}
</style><path class="lj49oqsiy"/>`,
		"fallback": "arcticons:screener",
	});
}

export default Component;
