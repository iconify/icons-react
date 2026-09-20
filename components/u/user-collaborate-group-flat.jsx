import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xp9mknn1h.css';
import '../../css/l/lohrjdbwg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xp9mknn1h"/><path class="lohrjdbwg"/></g>`,
		"fallback": "streamline-flex-color:user-collaborate-group-flat",
	});
}

export default Component;
