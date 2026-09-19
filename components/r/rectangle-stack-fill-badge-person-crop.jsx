import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-jbc412p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-jbc412p"/>`,
		"fallback": "f7:rectangle-stack-fill-badge-person-crop",
	});
}

export default Component;
