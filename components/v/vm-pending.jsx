import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcf0dwdjd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcf0dwdjd"/>`,
		"fallback": "codicon:vm-pending",
	});
}

export default Component;
