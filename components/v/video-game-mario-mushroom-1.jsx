import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sptz28b4p.css';
import '../../css/c/ca22gpdyi.css';
import '../../css/f/ft8y4ut8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sptz28b4p"/><path class="ca22gpdyi"/><path class="ft8y4ut8r"/></g>`,
		"fallback": "streamline-freehand:video-game-mario-mushroom-1",
	});
}

export default Component;
