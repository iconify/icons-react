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
		"content": `<style>.ttgkzhe4v {
  fill: currentColor;
  d: path("m20.577 15.77l-3.039-3.04v2.118l-1-1V6H8.691l-1-1h9.848v6.27l3.038-3.04zm-1.18 5.196L2.418 3.988l.708-.708l16.977 16.977zM4.884 5.037L5.845 6H4.54v12h12v-1.308l.961.962V19H3.539V5.039z");
}
</style><path class="ttgkzhe4v"/>`,
		"fallback": "material-symbols-light:videocam-off-outline-sharp",
	});
}

export default Component;
