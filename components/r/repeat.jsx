import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ului6db3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ului6db3x"/>`,
		"fallback": "vadivam:repeat",
	});
}

export default Component;
