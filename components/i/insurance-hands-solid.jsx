import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc_qa9b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oc_qa9b_q"/>`,
		"fallback": "streamline-sharp:insurance-hands-solid",
	});
}

export default Component;
