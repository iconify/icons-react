import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y40u92bbl.css';
import '../../css/e/ejog3cncc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y40u92bbl"/><path class="ejog3cncc"/>`,
		"fallback": "temaki:water-shutoff",
	});
}

export default Component;
