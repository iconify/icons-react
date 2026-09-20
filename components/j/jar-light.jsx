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
		"content": `<style>.rjuxn_blc {
  fill: currentColor;
  d: path("M182 50.48V32a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v18.48A38.05 38.05 0 0 0 42 88v112a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38V88a38.05 38.05 0 0 0-32-37.52M170 32v18h-20V30h18a2 2 0 0 1 2 2m-52 18V30h20v20ZM88 30h18v20H86V32a2 2 0 0 1 2-2m114 170a26 26 0 0 1-26 26H80a26 26 0 0 1-26-26V88a26 26 0 0 1 26-26h96a26 26 0 0 1 26 26Z");
}
</style><path class="rjuxn_blc"/>`,
		"fallback": "ph:jar-light",
	});
}

export default Component;
