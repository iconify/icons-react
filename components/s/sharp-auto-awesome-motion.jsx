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
		"content": `<style>.j2qqsnb4n {
  fill: currentColor;
  d: path("M14 2H2v12h2V4h10zm4 4H6v12h2V8h10zm4 4H10v12h12z");
}
</style><path class="j2qqsnb4n"/>`,
		"fallback": "ic:sharp-auto-awesome-motion",
	});
}

export default Component;
