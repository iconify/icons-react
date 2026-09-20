import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx2gc1csh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qx2gc1csh"/>`,
		"fallback": "streamline-plump:phone-remix",
	});
}

export default Component;
