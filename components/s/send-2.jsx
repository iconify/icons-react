import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh5nt7b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh5nt7b6s"/>`,
		"fallback": "tabler:send-2",
	});
}

export default Component;
