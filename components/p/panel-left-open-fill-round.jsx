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
		"content": `<style>.b1ghzcehc {
  fill: currentColor;
  d: path("M8 21a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21Zm2-2h6a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-6Zm2.293-4.707L14.586 12l-2.293-2.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414");
}
</style><path class="b1ghzcehc"/>`,
		"fallback": "coolicons:panel-left-open-fill-round",
	});
}

export default Component;
