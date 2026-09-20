import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c3-vr29xh.css';
import '../../css/b/bixa75bad.css';
import '../../css/o/ou8i0etgx.css';
import '../../css/k/kyx_bcc0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c3-vr29xh"/><path class="bixa75bad"/><path class="ou8i0etgx"/><path class="kyx_bcc0k"/></g>`,
		"fallback": "streamline-freehand-color:video-game-mario-mushroom-1",
	});
}

export default Component;
