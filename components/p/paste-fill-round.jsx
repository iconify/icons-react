import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-at6i8pn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-at6i8pn"/>`,
		"fallback": "coolicons:paste-fill-round",
	});
}

export default Component;
