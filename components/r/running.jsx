import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfd-gok6c.css';
import '../../css/g/g369r0bza.css';
import '../../css/f/flo-2gl9v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfd-gok6c"/><path class="g369r0bza"/><path class="flo-2gl9v"/>`,
		"fallback": "carbon:running",
	});
}

export default Component;
