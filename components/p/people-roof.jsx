import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgzons1xc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgzons1xc"/>`,
		"fallback": "fa6-solid:people-roof",
	});
}

export default Component;
