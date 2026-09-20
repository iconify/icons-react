import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igu7km99q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igu7km99q"/>`,
		"fallback": "streamline-sharp-color:link-chain",
	});
}

export default Component;
