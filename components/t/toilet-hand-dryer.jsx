import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bkwazxipw.css';
import '../../css/b/bntzpvbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bkwazxipw"/><path class="bntzpvbqb"/></g>`,
		"fallback": "streamline-freehand-color:toilet-hand-dryer",
	});
}

export default Component;
