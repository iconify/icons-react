import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_40l7-5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_40l7-5d"/>`,
		"fallback": "codicon:symbol-color",
	});
}

export default Component;
