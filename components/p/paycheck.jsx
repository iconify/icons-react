import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta49hdc7b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta49hdc7b"/>`,
		"fallback": "picon:paycheck",
	});
}

export default Component;
