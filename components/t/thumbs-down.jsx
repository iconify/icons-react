import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zujyr9_da.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zujyr9_da"/>`,
		"fallback": "el:thumbs-down",
	});
}

export default Component;
