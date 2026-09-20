import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qykgvefws.css';
import '../../css/i/ixcmx5bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qykgvefws"/><path class="ixcmx5bgx"/>`,
		"fallback": "token:kwenta",
	});
}

export default Component;
