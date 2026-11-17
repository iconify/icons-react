import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyk9e30qv.css';
import '../../css/t/ta5emobsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyk9e30qv"/><path class="ta5emobsn"/>`,
		"fallback": "lucide-extended:square-arrow-down-left-enter-filled",
	});
}

export default Component;
