import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx5-h5-aa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx5-h5-aa"/>`,
		"fallback": "streamline-plump-color:spiral-shape",
	});
}

export default Component;
