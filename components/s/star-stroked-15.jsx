import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmtf56boy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmtf56boy"/>`,
		"fallback": "maki:star-stroked-15",
	});
}

export default Component;
