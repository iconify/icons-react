import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zawcu5--r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zawcu5--r"/>`,
		"fallback": "f7:smallcircle-fill-circle",
	});
}

export default Component;
