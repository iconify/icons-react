import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od81eqt0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od81eqt0o"/>`,
		"fallback": "iconaut:shield-question-solid",
	});
}

export default Component;
