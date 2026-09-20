import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw_giebst.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dw_giebst"/>`,
		"fallback": "streamline-plump:refrigerator-solid",
	});
}

export default Component;
