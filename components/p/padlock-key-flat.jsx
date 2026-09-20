import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl4fetb6c.css';
import '../../css/b/bvsq-jb3c.css';
import '../../css/o/otyr5zb3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cl4fetb6c"/><path class="bvsq-jb3c"/><path clip-rule="evenodd" class="otyr5zb3v"/></g>`,
		"fallback": "streamline-plump-color:padlock-key-flat",
	});
}

export default Component;
