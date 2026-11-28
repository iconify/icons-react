import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah-qa3bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah-qa3bxk"/>`,
		"fallback": "noviair:music",
	});
}

export default Component;
