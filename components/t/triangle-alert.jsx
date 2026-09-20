import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5cqhtb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5cqhtb5n"/>`,
		"fallback": "vadivam:triangle-alert",
	});
}

export default Component;
