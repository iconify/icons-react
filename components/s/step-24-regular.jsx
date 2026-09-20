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
		"content": `<style>.sa3hi4j7b {
  fill: currentColor;
  d: path("M14.5 3.25c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25v15.5A3.25 3.25 0 0 1 18.75 22H3.25C2.56 22 2 21.44 2 20.75v-5c0-.69.56-1.25 1.25-1.25H8V9.25C8 8.56 8.56 8 9.25 8h5.25zm1.5.25v4.75c0 .69-.56 1.25-1.25 1.25H9.5v5.25c0 .69-.56 1.25-1.25 1.25H3.5v4.5h15.25a1.75 1.75 0 0 0 1.75-1.75V3.5z");
}
</style><path class="sa3hi4j7b"/>`,
		"fallback": "fluent:step-24-regular",
	});
}

export default Component;
