import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xs-7jccwj.css';
import '../../css/n/n93rxex0a.css';
import '../../css/u/uy61nnbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xs-7jccwj"/><path class="n93rxex0a"/><path class="uy61nnbfh"/></g>`,
		"fallback": "streamline-freehand-color:office-stapler-1",
	});
}

export default Component;
