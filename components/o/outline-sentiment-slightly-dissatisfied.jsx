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
		"content": `<style>.an0_1xo_x {
  cx: 8.5px;
  cy: 9.5px;
  r: 1.5px;
  fill: currentColor;
}

.gqe168uqm {
  fill: currentColor;
  d: path("M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m0-3.5c.73 0 1.39.19 1.97.53c.12-.14.86-.98 1.01-1.14A5.4 5.4 0 0 0 12 15c-1.11 0-2.13.33-2.99.88c.97 1.09.01.02 1.01 1.14c.59-.33 1.25-.52 1.98-.52");
}

.mmn7xsb7v {
  cx: 15.5px;
  cy: 9.5px;
  r: 1.5px;
  fill: currentColor;
}
</style><circle class="mmn7xsb7v"/><circle class="an0_1xo_x"/><path class="gqe168uqm"/>`,
		"fallback": "ic:outline-sentiment-slightly-dissatisfied",
	});
}

export default Component;
