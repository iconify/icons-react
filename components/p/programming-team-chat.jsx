import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x-s2c-blu.css';
import '../../css/v/v6jh7nbwl.css';
import '../../css/s/ssflmdble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x-s2c-blu"/><path class="v6jh7nbwl"/><path class="ssflmdble"/></g>`,
		"fallback": "streamline-freehand-color:programming-team-chat",
	});
}

export default Component;
