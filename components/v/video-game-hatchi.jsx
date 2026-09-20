import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/aroz0npjy.css';
import '../../css/e/ec32yhb6f.css';
import '../../css/l/l45dc9b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="aroz0npjy"/><path class="ec32yhb6f"/><path class="l45dc9b6s"/></g>`,
		"fallback": "streamline-freehand-color:video-game-hatchi",
	});
}

export default Component;
