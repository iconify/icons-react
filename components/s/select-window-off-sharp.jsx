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
		"content": `<style>.zf_zpteko {
  fill: currentColor;
  d: path("m21.11 22.53l-9.723-9.722H4v7h12v-3.814l1 1v3.814H3v-11h4V8.42L1.887 3.308l.713-.714l19.223 19.223zm-4.072-8.309l-1.067-1.067v-.346h-.346l-3-3H17v3.384h3v-7H9.01L7.092 4.275V3.192H21v11h-3.962z");
}
</style><path class="zf_zpteko"/>`,
		"fallback": "material-symbols-light:select-window-off-sharp",
	});
}

export default Component;
