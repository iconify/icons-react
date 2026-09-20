import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fey1rubmg.css';
import '../../css/k/kgcxlh52x.css';
import '../../css/m/mo3nibcdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fey1rubmg"/><path class="kgcxlh52x"/><path class="mo3nibcdd"/></g>`,
		"fallback": "streamline-freehand-color:video-game-360-vr",
	});
}

export default Component;
