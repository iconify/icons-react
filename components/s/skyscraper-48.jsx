import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr10-cc_e.css';
import '../../css/s/s27104b_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr10-cc_e"/><path class="s27104b_p"/>`,
		"fallback": "energy-icons:skyscraper-48",
	});
}

export default Component;
