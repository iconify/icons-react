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
		"content": `<style>.rz5u8hbns {
  fill: currentColor;
  d: path("M22.83 12.83L12 2H2v10l10.83 10.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5S7.33 8 6.5 8");
}
</style><path class="rz5u8hbns"/>`,
		"fallback": "ic:sharp-sell",
	});
}

export default Component;
