import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r2a_pl06n.css';
import '../../css/p/plca6s4vd.css';
import '../../css/z/zr33v6yek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r2a_pl06n"/><path class="plca6s4vd"/><path class="zr33v6yek"/></g>`,
		"fallback": "streamline-freehand-color:performance-presentation-graph",
	});
}

export default Component;
