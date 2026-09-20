import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jlvphhbiy.css';
import '../../css/z/zr99sdbva.css';
import '../../css/y/yol_fgxqt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jlvphhbiy"/><path class="zr99sdbva"/><path class="yol_fgxqt"/></g>`,
		"fallback": "streamline-flex-color:user-king-crown-flat",
	});
}

export default Component;
