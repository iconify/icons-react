import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz05-gtnn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz05-gtnn"/>`,
		"fallback": "oui:token-field",
	});
}

export default Component;
