import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voayclbjr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="voayclbjr"/>`,
		"fallback": "grommet-icons:status-good-small",
	});
}

export default Component;
