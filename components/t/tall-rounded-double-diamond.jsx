import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkn258b7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkn258b7s"/>`,
		"fallback": "pinhead:tall-rounded-double-diamond",
	});
}

export default Component;
