import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkhuum60o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkhuum60o"/>`,
		"fallback": "keyline-icons:phone-missed",
	});
}

export default Component;
