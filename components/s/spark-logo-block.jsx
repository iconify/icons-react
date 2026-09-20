import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfq14obvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nfq14obvi"/>`,
		"fallback": "streamline-logos:spark-logo-block",
	});
}

export default Component;
