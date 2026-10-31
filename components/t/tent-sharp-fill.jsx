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
		"content": `<style>.l7ztpwldq {
  fill: currentColor;
  d: path("M11 22.0001L1 22.0001L1 20.0001L2.3819 20.0001L11.1056 2.5528C11.275 2.214 11.6212 2 12 2C12.3788 2 12.725 2.214 12.8944 2.5528L21.6181 20.0001L23 20.0001L23 22.0001L17.6181 22.0001L12.8945 12.5529C12.7251 12.2141 12.3788 12.0001 12 12.0001C11.4477 12.0001 11 12.4478 11 13.0001L11 22.0001Z");
}
</style><path class="l7ztpwldq"/>`,
		"fallback": "keyline-icons:tent-sharp-fill",
	});
}

export default Component;
