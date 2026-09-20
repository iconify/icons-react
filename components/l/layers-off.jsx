import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kn5loqbno.css';
import '../../css/w/wq97u-bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kn5loqbno"/><path class="wq97u-bet"/></g>`,
		"fallback": "streamline-freehand-color:layers-off",
	});
}

export default Component;
