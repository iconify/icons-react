import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mm9o6_bit.css';
import '../../css/z/zzvb92bna.css';
import '../../css/a/avoehdcvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mm9o6_bit"/><path class="zzvb92bna"/><path class="avoehdcvq"/></g>`,
		"fallback": "streamline-freehand-color:video-game-controller",
	});
}

export default Component;
