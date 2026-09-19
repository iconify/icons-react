import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jybny6bov {
  cx: 45px;
  cy: 19px;
  r: 17px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}

.uk4g79bsv {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M42.6 29.4L2 62l32.6-40.6z");
}
</style><path class="uk4g79bsv"/><circle class="jybny6bov"/>`,
		"fallback": "emojione:round-pushpin",
	});
}

export default Component;
