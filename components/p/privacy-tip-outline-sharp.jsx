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
		"content": `<style>.u18spwr9a {
  fill: currentColor;
  d: path("M11.5 16.23h1v-5.653h-1zm.934-7.412q.182-.182.182-.434q0-.251-.182-.433T12 7.769t-.434.182t-.182.434t.182.433T12 9t.434-.182M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963m0-1.062q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.23l-6 2.23V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.88");
}
</style><path class="u18spwr9a"/>`,
		"fallback": "material-symbols-light:privacy-tip-outline-sharp",
	});
}

export default Component;
