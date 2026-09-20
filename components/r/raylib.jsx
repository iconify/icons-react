import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op73mw-dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op73mw-dx"/>`,
		"fallback": "thesvg-color:raylib",
	});
}

export default Component;
