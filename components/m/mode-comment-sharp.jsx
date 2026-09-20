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
		"content": `<style>.axd17qbjc {
  fill: currentColor;
  d: path("M2 18V2h20v20l-4-4z");
}
</style><path class="axd17qbjc"/>`,
		"fallback": "material-symbols:mode-comment-sharp",
	});
}

export default Component;
