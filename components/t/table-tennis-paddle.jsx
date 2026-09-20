import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mji30zbhe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mji30zbhe"/>`,
		"fallback": "pinhead:table-tennis-paddle",
	});
}

export default Component;
