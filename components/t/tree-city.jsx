import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbqdb8bjk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbqdb8bjk"/>`,
		"fallback": "fa7-solid:tree-city",
	});
}

export default Component;
