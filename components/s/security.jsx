import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rulstbbgo.css';
import '../../css/c/c3te-ab8q.css';
import '../../css/x/x35msp2lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rulstbbgo"/><path class="c3te-ab8q"/><path class="x35msp2lf"/>`,
		"fallback": "gcp:security",
	});
}

export default Component;
