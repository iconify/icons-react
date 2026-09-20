import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x7cz2sb0x {
  fill: currentColor;
  d: path("M76 128a52 52 0 1 0 52-52a52.05 52.05 0 0 0-52 52m80 0a28 28 0 1 1-28-28a28 28 0 0 1 28 28m69.6-65.36l-88-48.17a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.17a20 20 0 0 0 10.4-17.55V80.19a20 20 0 0 0-10.4-17.55M212 173.44l-84 46l-84-46V82.56l84-46l84 46Z");
}
</style><path class="x7cz2sb0x"/>`,
		"fallback": "ph:nut-bold",
	});
}

export default Component;
