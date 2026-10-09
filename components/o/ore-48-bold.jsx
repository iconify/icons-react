import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3qc5obqr.css';
import '../../css/m/mwc9o5b_m.css';
import '../../css/i/ine-7ac_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3qc5obqr"/><path class="mwc9o5b_m"/><path class="ine-7ac_y"/>`,
		"fallback": "energy-icons:ore-48-bold",
	});
}

export default Component;
