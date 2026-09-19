import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coomk31qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coomk31qe"/>`,
		"fallback": "grommet-icons:monospace",
	});
}

export default Component;
