import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qce6_bb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qce6_bb4a"/>`,
		"fallback": "grommet-icons:pie-chart",
	});
}

export default Component;
