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
		"content": `<style>.e5-kd2jkh {
  fill: var(--svg-color--f6ff0d, #f6ff0d);
  d: path("M10.64 9.272L14.236 3h3.595l-2.696 8.978H12.46l7.189 3.59L16.033 21l-5.392-6.313v4.473H4.35l2.156-7.182H4.351L7.046 3h3.595z");
}
</style><path class="e5-kd2jkh"/>`,
		"fallback": "token-branded:katana",
	});
}

export default Component;
