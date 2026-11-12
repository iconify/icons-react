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
		"content": `<style>.czuk_uaey {
  fill: currentColor;
  d: path("m17.1 18.122l3.666 3.666a.723.723 0 0 0 1.023-1.022L18.122 17.1a9 9 0 0 1-1.022 1.022");
}

.g-tqdrbyb {
  fill: currentColor;
  d: path("M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="g-tqdrbyb"/><path class="czuk_uaey"/>`,
		"fallback": "solar:magnifer-bold-duotone",
	});
}

export default Component;
