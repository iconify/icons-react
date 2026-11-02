import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcn44kbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcn44kbbe"/>`,
		"fallback": "mingcute:taipei101-line",
	});
}

export default Component;
