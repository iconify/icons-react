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
		"content": `<style>.eauxbsbwk {
  fill: currentColor;
  d: path("M12 19.577L1.423 9q2.15-1.93 4.837-2.966Q8.946 5 12 5q3.06 0 5.746 1.035T22.577 9zm-2.975-4.402q.625-.45 1.388-.7t1.587-.25t1.588.25t1.387.7L21.1 9.05q-1.95-1.475-4.262-2.262T12 6t-4.837.788T2.9 9.05z");
}
</style><path class="eauxbsbwk"/>`,
		"fallback": "material-symbols-light:network-wifi-1-bar",
	});
}

export default Component;
