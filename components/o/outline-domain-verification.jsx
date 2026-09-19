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
		"content": `<style>.iud3xt7yz {
  fill: currentColor;
  d: path("m16.6 10.88l-1.42-1.42l-4.24 4.25l-2.12-2.13L7.4 13l3.54 3.54z");
}

.m_gsnq25f {
  fill: currentColor;
  d: path("M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 14H5V8h14z");
}
</style><path class="iud3xt7yz"/><path class="m_gsnq25f"/>`,
		"fallback": "ic:outline-domain-verification",
	});
}

export default Component;
