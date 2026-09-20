import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to4xgtbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to4xgtbnz"/>`,
		"fallback": "material-icon-theme:tldraw-light",
	});
}

export default Component;
