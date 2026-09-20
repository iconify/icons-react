import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmhvf_b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmhvf_b-q"/>`,
		"fallback": "streamline-sharp:test-tube-solid",
	});
}

export default Component;
