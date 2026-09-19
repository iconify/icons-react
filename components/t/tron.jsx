import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afm2-tblz.css';

const viewBox = {"width":1025,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afm2-tblz"/>`,
		"fallback": "whh:tron",
	});
}

export default Component;
