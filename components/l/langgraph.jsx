import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr6yuc-vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr6yuc-vi"/>`,
		"fallback": "thesvg-color:langgraph",
	});
}

export default Component;
