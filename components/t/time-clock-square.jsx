import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vm-_47e8t.css';
import '../../css/m/mezpqlmpc.css';
import '../../css/g/gimgq9j2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vm-_47e8t"/><path class="mezpqlmpc"/><path class="gimgq9j2n"/></g>`,
		"fallback": "streamline-freehand:time-clock-square",
	});
}

export default Component;
