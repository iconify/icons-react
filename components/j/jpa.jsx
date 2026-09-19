import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9uem0bgk.css';

const viewBox = {"width":1547,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9uem0bgk"/>`,
		"fallback": "ls:jpa",
	});
}

export default Component;
