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
		"content": `<style>.tw6olhx2p {
  fill: currentColor;
  d: path("M27.528 40.772c-1.617 2.99-5.915 2.966-7.499-.041L4.495 11.229C3.005 8.4 5.057 5 8.255 5h31.488c3.22 0 5.27 3.44 3.739 6.272z");
}
</style><path class="tw6olhx2p"/>`,
		"fallback": "fluent:triangle-down-48-filled",
	});
}

export default Component;
