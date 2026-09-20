import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jjfywviqd.css';
import '../../css/c/csm3i_bhj.css';
import '../../css/d/d58u2t8ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jjfywviqd"/><path class="csm3i_bhj"/><path class="d58u2t8ks"/></g>`,
		"fallback": "streamline-freehand-color:presentation-projector-screen-budget-analytics",
	});
}

export default Component;
