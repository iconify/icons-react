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
		"content": `<style>.ee4i1obtm {
  fill: currentColor;
  d: path("M3.48 19V5h14v6.27l3.04-3.04v7.54l-3.04-3.04V19zm7.74-3.692l3.807-3.858l-.708-.708l-3.1 3.139l-3.43-3.42h2.269v-1h-4v4h1v-2.315z");
}
</style><path class="ee4i1obtm"/>`,
		"fallback": "material-symbols-light:missed-video-call-sharp",
	});
}

export default Component;
