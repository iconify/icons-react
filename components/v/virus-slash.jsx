import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nif2_eh7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nif2_eh7f"/>`,
		"fallback": "uis:virus-slash",
	});
}

export default Component;
