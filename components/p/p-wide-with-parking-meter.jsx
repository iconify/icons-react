import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zii5sn5at.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zii5sn5at"/>`,
		"fallback": "pinhead:p-wide-with-parking-meter",
	});
}

export default Component;
