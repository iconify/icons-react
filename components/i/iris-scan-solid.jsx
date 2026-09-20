import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz-vsrl_p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qz-vsrl_p"/>`,
		"fallback": "streamline-flex:iris-scan-solid",
	});
}

export default Component;
