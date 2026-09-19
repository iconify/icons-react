import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du9039guc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du9039guc"/>`,
		"fallback": "grommet-icons:pinterest",
	});
}

export default Component;
