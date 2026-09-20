import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hmajdsbvs.css';
import '../../css/x/x70s9bt2g.css';
import '../../css/n/n2j85qahi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hmajdsbvs"/><path class="x70s9bt2g"/><path class="n2j85qahi"/></g>`,
		"fallback": "streamline-freehand-color:video-game-controller-wifi",
	});
}

export default Component;
