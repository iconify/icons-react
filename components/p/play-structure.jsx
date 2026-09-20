import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq-fxh_-n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq-fxh_-n"/>`,
		"fallback": "temaki:play-structure",
	});
}

export default Component;
