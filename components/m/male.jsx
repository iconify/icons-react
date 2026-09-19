import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po02nqb6a.css';

const viewBox = {"width":303,"height":720};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po02nqb6a"/>`,
		"fallback": "ls:male",
	});
}

export default Component;
