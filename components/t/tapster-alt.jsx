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
		"content": `<style>.isbeg_byl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 30.767c-5.485 3.019-11.782 4.739-18.5 4.739s-13.015-1.72-18.5-4.739m3.927-6.069C13.777 27.002 18.742 28.3 24 28.3s10.224-1.298 14.573-3.602m-25.186-6.102c3.18 1.623 6.816 2.532 10.613 2.532s7.432-.91 10.613-2.532m-17.299-6.102c2.204 1.085 4.468 1.597 6.686 1.461c2.37 0 4.641-.52 6.686-1.46");
}
</style><path class="isbeg_byl"/>`,
		"fallback": "arcticons:tapster-alt",
	});
}

export default Component;
