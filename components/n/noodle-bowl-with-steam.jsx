import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diraqp4hk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diraqp4hk"/>`,
		"fallback": "pinhead:noodle-bowl-with-steam",
	});
}

export default Component;
