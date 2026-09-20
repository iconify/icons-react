import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myo5-e-9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myo5-e-9c"/>`,
		"fallback": "octicon:issue-draft-24",
	});
}

export default Component;
