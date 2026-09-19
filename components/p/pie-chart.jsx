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
		"content": `<style>.wio4a_bak {
  fill: currentColor;
  d: path("M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10m2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99m0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99z");
}
</style><path class="wio4a_bak"/>`,
		"fallback": "ic:pie-chart",
	});
}

export default Component;
