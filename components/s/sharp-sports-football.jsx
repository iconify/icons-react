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
		"content": `<style>.dq-3oqbpi {
  fill: currentColor;
  d: path("M3.02 15.62c-.08 2.42.32 4.34.67 4.69s2.28.76 4.69.67zM13.08 3.28c-2.33.42-4.79 1.34-6.62 3.18s-2.76 4.29-3.18 6.62l7.63 7.63c2.34-.41 4.79-1.34 6.62-3.18s2.76-4.29 3.18-6.62zM9.9 15.5l-1.4-1.4l5.6-5.6l1.4 1.4zm11.08-7.12c.08-2.42-.32-4.34-.67-4.69s-2.28-.76-4.69-.67z");
}
</style><path class="dq-3oqbpi"/>`,
		"fallback": "ic:sharp-sports-football",
	});
}

export default Component;
