import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbfdil6ak.css';
import '../../css/q/qvfvdgulf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbfdil6ak"/><path class="qvfvdgulf"/>`,
		"fallback": "token:kroma",
	});
}

export default Component;
