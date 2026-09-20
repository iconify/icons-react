import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jn5ns-bvo.css';
import '../../css/c/c105892kk.css';
import '../../css/v/vbin-qbry.css';
import '../../css/t/t8s921bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jn5ns-bvo"/><path class="c105892kk"/><path class="vbin-qbry"/><path class="t8s921bqp"/></g>`,
		"fallback": "streamline-freehand-color:vinyl-record-gramophone",
	});
}

export default Component;
