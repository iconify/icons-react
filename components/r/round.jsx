import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9v4wgnrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="h9v4wgnrz"/>`,
		"fallback": "icon-park-solid:round",
	});
}

export default Component;
