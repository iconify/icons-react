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
		"content": `<style>.ddca9rd-a {
  fill: currentColor;
  d: path("M3.5 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993zh13.503zm-4-6.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993zh13.503zm-4-6.492a1.5 1.5 0 1 1 0 2.999a1.5 1.5 0 0 1 0-3M7.5 5h13.503a1 1 0 0 1 .117 1.993L21.003 7H7.5a1 1 0 0 1-.116-1.993zh13.503z");
}
</style><path class="ddca9rd-a"/>`,
		"fallback": "fluent:text-bullet-list-ltr-24-filled",
	});
}

export default Component;
