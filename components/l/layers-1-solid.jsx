import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xup44hzvj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xup44hzvj"/>`,
		"fallback": "streamline-plump:layers-1-solid",
	});
}

export default Component;
