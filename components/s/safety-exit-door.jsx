import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r6knjfq9q.css';
import '../../css/f/fxwmdgbgf.css';
import '../../css/k/kd35jjh2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r6knjfq9q"/><path class="fxwmdgbgf"/><path class="kd35jjh2h"/></g>`,
		"fallback": "streamline-freehand-color:safety-exit-door",
	});
}

export default Component;
