import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxx2r1bpw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxx2r1bpw"/>`,
		"fallback": "energy-icons:sparkles-48",
	});
}

export default Component;
