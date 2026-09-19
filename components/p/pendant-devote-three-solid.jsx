import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc0bmzbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc0bmzbjh"/>`,
		"fallback": "cbi:pendant-devote-three-solid",
	});
}

export default Component;
