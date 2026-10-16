import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_ml6hb0a.css';
import '../../css/g/g66uptbvs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_ml6hb0a"/><path class="g66uptbvs"/>`,
		"fallback": "energy-icons:variable-resistor-48",
	});
}

export default Component;
