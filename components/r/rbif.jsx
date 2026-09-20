import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r90j-2b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r90j-2b5g"/>`,
		"fallback": "token:rbif",
	});
}

export default Component;
