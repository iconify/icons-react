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
		"content": `<style>.uc908bcqk {
  fill: currentColor;
  d: path("M7 11V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v7h2a3 3 0 0 1 3 3v1a4 4 0 0 1-4 4H7a5 5 0 0 1-5-5v-3a3 3 0 0 1 3-3Zm3.293-.707a.999.999 0 1 0 1.414 1.414l.293-.293V15a1 1 0 0 0 2 0V9a1.002 1.002 0 0 0-1.707-.707ZM7 13H5a.997.997 0 0 0-1 1v3a3 3 0 0 0 3 3Zm10 7h1a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1h-2Z");
}
</style><path class="uc908bcqk"/>`,
		"fallback": "coolicons:podium-fill-round",
	});
}

export default Component;
