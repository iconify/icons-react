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
		"content": `<style>.tvx1lebqh {
  fill: currentColor;
  d: path("M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z");
}
</style><path class="tvx1lebqh"/>`,
		"fallback": "ic:twotone-equalizer",
	});
}

export default Component;
