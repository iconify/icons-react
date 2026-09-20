import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb55eibow.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb55eibow"/>`,
		"fallback": "temaki:tree-palm",
	});
}

export default Component;
