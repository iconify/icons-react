import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj5vwp4am.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hj5vwp4am"/>`,
		"fallback": "streamline-plump:leaf-protect-solid",
	});
}

export default Component;
