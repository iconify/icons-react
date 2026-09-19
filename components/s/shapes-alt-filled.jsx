import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apfcrhlku.css';
import '../../css/g/g-6i4by5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apfcrhlku"/><rect class="g-6i4by5o"/>`,
		"fallback": "boxicons:shapes-alt-filled",
	});
}

export default Component;
