import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4pi18-ok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4pi18-ok"/>`,
		"fallback": "energy-icons:waveform-48",
	});
}

export default Component;
