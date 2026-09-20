import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg-9uhmgb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg-9uhmgb"/>`,
		"fallback": "pinhead:person-piloting-hang-glider",
	});
}

export default Component;
