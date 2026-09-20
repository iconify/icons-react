import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l76j_08rg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l76j_08rg"/>`,
		"fallback": "oui:vector",
	});
}

export default Component;
