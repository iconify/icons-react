import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n7u4o-vzj.css';
import '../../css/l/lqjiyubml.css';
import '../../css/o/o-fe66dks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n7u4o-vzj"/><path class="lqjiyubml"/><path class="o-fe66dks"/></g>`,
		"fallback": "streamline-freehand-color:laundry-hand-wash",
	});
}

export default Component;
