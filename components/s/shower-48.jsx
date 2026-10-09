import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch7fqmebm.css';
import '../../css/v/vh9btobqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch7fqmebm"/><path class="vh9btobqw"/>`,
		"fallback": "energy-icons:shower-48",
	});
}

export default Component;
