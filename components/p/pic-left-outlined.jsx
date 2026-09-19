import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft6y81b-e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft6y81b-e"/>`,
		"fallback": "ant-design:pic-left-outlined",
	});
}

export default Component;
