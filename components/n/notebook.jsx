import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb1xkjbuo.css';
import '../../css/y/yg7xgph3p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb1xkjbuo"/><path class="yg7xgph3p"/>`,
		"fallback": "ep:notebook",
	});
}

export default Component;
