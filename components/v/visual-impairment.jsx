import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpo8tnbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpo8tnbfj"/>`,
		"fallback": "guidance:visual-impairment",
	});
}

export default Component;
