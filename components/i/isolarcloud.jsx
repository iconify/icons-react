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
		"content": `<style>.h4qlgnbaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8 12.2l3.8 4m28.2-4l-3.8 4m-12.3-9v5.4M12 40.8c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5l.4-1.1c1.3-4.8 5.7-8.3 10.8-8.3s11.2 5 11.2 11.2s-5 11.2-11.2 11.2m12.8-13c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5m0 0H15.3m20.7-13h-1.8");
}
</style><path class="h4qlgnbaa"/>`,
		"fallback": "arcticons:isolarcloud",
	});
}

export default Component;
