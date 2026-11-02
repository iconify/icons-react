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
		"content": `<style>.k-e8hkb8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11L5 4c-.369-.369.262-1 1-1h12c.738 0 1.369.631 1 1zm0 0v10m-4 0h8M7 6h10");
}
</style><path class="k-e8hkb8l"/>`,
		"fallback": "coolicons:martini-round",
	});
}

export default Component;
