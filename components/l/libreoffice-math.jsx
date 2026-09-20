import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyq4nf5rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyq4nf5rx"/>`,
		"fallback": "thesvg-color:libreoffice-math",
	});
}

export default Component;
