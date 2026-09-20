import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wgzem20tm {
  fill: currentColor;
  d: path("M13 6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM7 9H3.5a.5.5 0 0 0-.5.5v.5c0 1.438 1.432 3 4 3c0 .35.062.684.172.996Q7.087 14 7 14c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 3.5 8H7zm3.5-1a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM7 1.5a2.75 2.75 0 0 1 2.637 3.522a3 3 0 0 0-2.46 1.968C7.118 6.994 7.059 7 7 7a2.75 2.75 0 0 1 0-5.5m0 1A1.75 1.75 0 1 0 7 6a1.75 1.75 0 0 0 0-3.5");
}
</style><path class="wgzem20tm"/>`,
		"fallback": "fluent:person-guest-16-regular",
	});
}

export default Component;
