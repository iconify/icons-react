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
		"content": `<style>.z2mhlqndk {
  fill: currentColor;
  d: path("M2 5v3h6v2.5H3v3h5V16H2v3h9V5zm17 3v8h-4V8zm3-3H12v14h10z");
}
</style><path class="z2mhlqndk"/>`,
		"fallback": "ic:sharp-30fps",
	});
}

export default Component;
