import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bnof37xfk.css';
import '../../css/h/hmx43h1zy.css';
import '../../css/q/qh2e39yog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bnof37xfk"/><path class="hmx43h1zy"/><path class="qh2e39yog"/></g>`,
		"fallback": "streamline-freehand-color:paragraphs-indent",
	});
}

export default Component;
