import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cso4l-5ej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cso4l-5ej"/>`,
		"fallback": "healthicons:malaria-pv-microscope",
	});
}

export default Component;
