import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnni-et4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qnni-et4m"/>`,
		"fallback": "streamline-plump:threat-phone-solid",
	});
}

export default Component;
