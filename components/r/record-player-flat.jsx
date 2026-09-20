import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c2eei-bgk.css';
import '../../css/l/lw623bb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c2eei-bgk"/><path class="lw623bb4u"/></g>`,
		"fallback": "streamline-sharp-color:record-player-flat",
	});
}

export default Component;
