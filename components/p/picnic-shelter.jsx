import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlq4g9a-n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlq4g9a-n"/>`,
		"fallback": "temaki:picnic-shelter",
	});
}

export default Component;
