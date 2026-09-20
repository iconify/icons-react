import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz2aoacna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz2aoacna"/>`,
		"fallback": "reicon:quote-down-square-filled",
	});
}

export default Component;
