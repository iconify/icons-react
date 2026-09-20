import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qipvqzr9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qipvqzr9f"/>`,
		"fallback": "tabler:jetpack-filled",
	});
}

export default Component;
