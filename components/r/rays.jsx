import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al29qccdu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al29qccdu"/>`,
		"fallback": "f7:rays",
	});
}

export default Component;
