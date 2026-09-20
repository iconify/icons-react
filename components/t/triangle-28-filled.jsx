import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ih1i-5b2o {
  fill: currentColor;
  d: path("M15.967 4.158c-.857-1.542-3.075-1.542-3.933 0L3.069 20.285C2.142 21.952 3.347 24 5.254 24h17.493c1.906 0 3.111-2.048 2.185-3.715z");
}
</style><path class="ih1i-5b2o"/>`,
		"fallback": "fluent:triangle-28-filled",
	});
}

export default Component;
