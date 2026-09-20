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
		"content": `<style>.ew5cfkblz {
  fill: currentColor;
  d: path("M5 14h3.912l-1.885-3H5zm0 5h7.027l-2.5-4H5zm-2.98 1v-1H4V8h1v2h2.589l5 8h3.026v1h2.539v-6.573q-1.223-.312-2.035-1.121q-.811-.81-.811-2.171q0-.754.267-1.309t.746-1.028q-.029-.448-.04-.762t-.012-.652q0-1 .692-1.692T18.655 3t1.702.692t.702 1.693q0 .223-.012.7t-.04.675q.46.492.727 1.056T22 9.135q0 1.361-.812 2.17q-.811.81-2.034 1.122V19H22v1z");
}
</style><path class="ew5cfkblz"/>`,
		"fallback": "material-symbols-light:playground-2-sharp",
	});
}

export default Component;
