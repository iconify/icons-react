import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n1yi6yvsv.css';
import '../../css/u/uqov-ibdi.css';
import '../../css/x/xx3inh7rz.css';
import '../../css/g/ggoszyzqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n1yi6yvsv"/><path class="uqov-ibdi"/><path class="xx3inh7rz"/><path class="ggoszyzqo"/></g>`,
		"fallback": "streamline-freehand-color:learning-programming-book",
	});
}

export default Component;
