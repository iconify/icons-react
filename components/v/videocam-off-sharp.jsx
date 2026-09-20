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
		"content": `<style>.dkpewlp5a {
  fill: currentColor;
  d: path("m20.577 15.77l-3.039-3.04v2.118L7.692 5h9.848v6.27l3.038-3.04zm-1.18 5.196L2.418 3.988l.708-.708l16.977 16.977zM4.884 5.037L17.5 17.655V19H3.539V5.039z");
}
</style><path class="dkpewlp5a"/>`,
		"fallback": "material-symbols-light:videocam-off-sharp",
	});
}

export default Component;
