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
		"content": `<style>.azkrf8hpp {
  fill: currentColor;
  d: path("M6.61 10.995c2.255 0 3.687 2.02 5.454 2.74c.244.1.359.403.209.62l-4.22 6.082a1.725 1.725 0 0 1-2.751.11L1.76 16.224a.725.725 0 0 1-.081-.81c1-1.81 2.932-4.418 4.93-4.419m9.287.732a1.725 1.725 0 0 1 2.751-.11l3.541 4.323c.19.23.226.55.082.81c-1.001 1.81-2.933 4.418-4.931 4.418c-2.255 0-3.687-2.019-5.453-2.74c-.245-.099-.36-.402-.21-.62zM7 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m10 0a3 3 0 1 1 0 6a3 3 0 0 1 0-6");
}
</style><path class="azkrf8hpp"/>`,
		"fallback": "fluent:people-interwoven-24-filled",
	});
}

export default Component;
