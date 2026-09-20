import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj-78ka4z.css';
import '../../css/y/yu6tuw6du.css';
import '../../css/j/jdtu_dbam.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj-78ka4z"/><path class="yu6tuw6du"/><path class="jdtu_dbam"/>`,
		"fallback": "qlementine-icons:layers-3-16",
	});
}

export default Component;
