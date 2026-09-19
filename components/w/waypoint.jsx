import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg3fc5b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg3fc5b9v"/>`,
		"fallback": "grommet-icons:waypoint",
	});
}

export default Component;
