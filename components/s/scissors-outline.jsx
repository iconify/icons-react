import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqe620tbb.css';
import '../../css/n/nxaii_ued.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqe620tbb"/><path class="nxaii_ued"/>`,
		"fallback": "eva:scissors-outline",
	});
}

export default Component;
