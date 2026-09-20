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
		"content": `<style>.ifg5nwb4l {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708l1.48 1.479A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h5a3 3 0 0 0 2.932-2.361l4.214 4.215a.5.5 0 0 0 .708-.708zM14 11.88l3.076 3.075c.509-.14.922-.598.922-1.207V6.252a1.25 1.25 0 0 0-1.96-1.028L14 6.63zM6.121 4L13 10.879V7a3 3 0 0 0-3-3z");
}
</style><path class="ifg5nwb4l"/>`,
		"fallback": "fluent:video-off-20-filled",
	});
}

export default Component;
