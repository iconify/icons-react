import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykzow4bml.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykzow4bml"/>`,
		"fallback": "f7:trash-circle-fill",
	});
}

export default Component;
