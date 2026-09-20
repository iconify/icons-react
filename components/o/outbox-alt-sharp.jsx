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
		"content": `<style>.akzrbcboi {
  fill: currentColor;
  d: path("M7 16.539L16.577 12L7 7.462v3.215L11 12l-4 1.323zM4 20V4h16v16z");
}
</style><path class="akzrbcboi"/>`,
		"fallback": "material-symbols-light:outbox-alt-sharp",
	});
}

export default Component;
