import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cyp1nbcra {
  fill: currentColor;
  d: path("M23.998 4a7.501 7.501 0 0 0-1.25 14.898V23H15.25a3.75 3.75 0 0 0-3.75 3.75v2.352a7.501 7.501 0 1 0 2.5 0V26.75c0-.69.56-1.25 1.25-1.25h17.499c.69 0 1.25.56 1.25 1.25v2.352a7.501 7.501 0 1 0 2.5 0V26.75a3.75 3.75 0 0 0-3.75-3.75h-7.5v-4.102A7.501 7.501 0 0 0 23.998 4m-5 7.501a5.001 5.001 0 1 1 10.001 0a5.001 5.001 0 0 1-10.002 0M7.75 36.5a5.001 5.001 0 1 1 10.002 0a5.001 5.001 0 0 1-10.002 0m27.5-5.001a5.001 5.001 0 1 1 0 10.002a5.001 5.001 0 0 1 0-10.002");
}
</style><path class="cyp1nbcra"/>`,
		"fallback": "fluent:organization-48-regular",
	});
}

export default Component;
