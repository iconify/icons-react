import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a34mmrbvv.css';

const viewBox = {"width":1792,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a34mmrbvv"/>`,
		"fallback": "fa:mail-reply",
	});
}

export default Component;
