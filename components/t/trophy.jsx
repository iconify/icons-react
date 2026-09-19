import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn5yx0u5x.css';
import '../../css/j/jj9yknbgz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn5yx0u5x"/><path class="jj9yknbgz"/>`,
		"fallback": "ei:trophy",
	});
}

export default Component;
