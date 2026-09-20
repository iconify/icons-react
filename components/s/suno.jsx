import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7ra1sb4x.css';

const viewBox = {"width":122,"height":122};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a7ra1sb4x"/>`,
		"fallback": "thesvg-color:suno",
	});
}

export default Component;
