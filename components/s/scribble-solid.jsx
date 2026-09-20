import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsaj1hbsz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gsaj1hbsz"/>`,
		"fallback": "teenyicons:scribble-solid",
	});
}

export default Component;
