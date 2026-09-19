import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmc12mo1y.css';
import '../../css/g/g6nhfybzv.css';
import '../../css/c/cyo88nvfm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmc12mo1y"/><path class="g6nhfybzv"/><path class="cyo88nvfm"/>`,
		"fallback": "ep:male",
	});
}

export default Component;
