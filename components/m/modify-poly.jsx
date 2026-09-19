import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/str33hb3k.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="str33hb3k"/>`,
		"fallback": "gis:modify-poly",
	});
}

export default Component;
