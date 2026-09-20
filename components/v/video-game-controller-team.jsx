import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y6foxtgri.css';
import '../../css/v/vjw4_4bem.css';
import '../../css/o/orb04qb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y6foxtgri"/><path class="vjw4_4bem"/><path class="orb04qb6b"/></g>`,
		"fallback": "streamline-freehand-color:video-game-controller-team",
	});
}

export default Component;
