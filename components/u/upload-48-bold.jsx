import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5llwvbom.css';
import '../../css/m/moizz8y3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5llwvbom"/><path class="moizz8y3x"/>`,
		"fallback": "energy-icons:upload-48-bold",
	});
}

export default Component;
