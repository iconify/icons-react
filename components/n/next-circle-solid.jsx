import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9mv3hbxk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d9mv3hbxk"/>`,
		"fallback": "teenyicons:next-circle-solid",
	});
}

export default Component;
