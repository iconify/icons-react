import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/slozidb7w.css';
import '../../css/e/e4-ajioyi.css';
import '../../css/f/fnkn5l_rv.css';
import '../../css/l/lwr3rgbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="slozidb7w"/><path class="e4-ajioyi"/><path class="fnkn5l_rv"/><path class="lwr3rgbpj"/></g>`,
		"fallback": "streamline-freehand-color:wealth-time-money",
	});
}

export default Component;
