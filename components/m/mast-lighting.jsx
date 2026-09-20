import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj4co0bsz.css';
import '../../css/a/aaj4a2bie.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj4co0bsz"/><path class="aaj4a2bie"/>`,
		"fallback": "temaki:mast-lighting",
	});
}

export default Component;
