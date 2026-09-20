import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhpwjz4iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhpwjz4iz"/>`,
		"fallback": "mdi:math-norm",
	});
}

export default Component;
