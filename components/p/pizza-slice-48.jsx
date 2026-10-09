import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtawmliso.css';
import '../../css/u/ulvnhe8jo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtawmliso"/><path class="ulvnhe8jo"/>`,
		"fallback": "energy-icons:pizza-slice-48",
	});
}

export default Component;
