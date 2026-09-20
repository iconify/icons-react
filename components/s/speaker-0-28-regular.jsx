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
		"content": `<style>.ems9etflk {
  fill: currentColor;
  d: path("M16.5 4.814c0-1.094-1.307-1.66-2.105-.912l-4.937 4.63a1.75 1.75 0 0 1-1.197.473H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.748 2.105.182 2.105-.912zm-6.016 4.812L15 5.39v17.216l-4.516-4.232a3.25 3.25 0 0 0-2.222-.878H5.25a1.75 1.75 0 0 1-1.75-1.75v-3.492c0-.966.784-1.75 1.75-1.75h3.011a3.25 3.25 0 0 0 2.223-.88");
}
</style><path class="ems9etflk"/>`,
		"fallback": "fluent:speaker-0-28-regular",
	});
}

export default Component;
