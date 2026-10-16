import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1o8r1a2a.css';
import '../../css/u/ux49e7bkd.css';
import '../../css/n/nn0frab6c.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1o8r1a2a"/><path class="ux49e7bkd"/><path class="nn0frab6c"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:offshore-hydrogen-48-bold",
	});
}

export default Component;
