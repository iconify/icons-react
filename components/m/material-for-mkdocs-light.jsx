import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6-lcumwc.css';
import '../../css/q/q6r9cfypp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6-lcumwc"/><path class="q6r9cfypp"/>`,
		"fallback": "selfhst:material-for-mkdocs-light",
	});
}

export default Component;
