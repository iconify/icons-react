import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goe_lpbge.css';
import '../../css/f/fq6fmdr9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goe_lpbge"/><path class="fq6fmdr9f"/>`,
		"fallback": "energy-icons:turtle-48",
	});
}

export default Component;
