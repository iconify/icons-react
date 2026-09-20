import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy-nhvbvw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy-nhvbvw"/>`,
		"fallback": "streamline-color:loop-1",
	});
}

export default Component;
