import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zfopdhy3l.css';
import '../../css/c/c984gybxi.css';
import '../../css/u/uwgnrnbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zfopdhy3l"/><path class="c984gybxi"/><path class="uwgnrnbkn"/></g>`,
		"fallback": "streamline-freehand-color:video-player-slider",
	});
}

export default Component;
