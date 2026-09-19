import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxnb46bqn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxnb46bqn"/>`,
		"fallback": "icomoon-free:radio-unchecked",
	});
}

export default Component;
