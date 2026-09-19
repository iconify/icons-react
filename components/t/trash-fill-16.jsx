import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvpwvr8sq.css';
import '../../css/t/tgfroo5dd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvpwvr8sq"/><path class="tgfroo5dd"/>`,
		"fallback": "garden:trash-fill-16",
	});
}

export default Component;
