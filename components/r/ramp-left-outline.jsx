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
		"content": `<style>.jech00bie {
  fill: currentColor;
  d: path("M11.5 19.98V5.94L9.4 8.036l-.708-.708L12 4.019l3.308 3.308l-.708.708l-2.1-2.094V9q0 1.542.586 2.86q.585 1.319 1.455 2.366t1.857 1.845t1.794 1.3l-.719.72q-1.713-1.126-2.998-2.456q-1.284-1.33-1.975-2.762v7.108z");
}
</style><path class="jech00bie"/>`,
		"fallback": "material-symbols-light:ramp-left-outline",
	});
}

export default Component;
