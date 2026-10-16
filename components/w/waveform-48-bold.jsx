import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0gim_b-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0gim_b-s"/>`,
		"fallback": "energy-icons:waveform-48-bold",
	});
}

export default Component;
