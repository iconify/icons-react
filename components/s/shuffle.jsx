import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4qu_kbxw.css';
import '../../css/j/jrj0xe63g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4qu_kbxw"/><path class="jrj0xe63g"/>`,
		"fallback": "pixel:shuffle",
	});
}

export default Component;
