import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m006cx35p.css';

const viewBox = {"width":22,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m006cx35p"/>`,
		"fallback": "temaki:latrine",
	});
}

export default Component;
