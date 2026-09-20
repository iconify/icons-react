import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sznuz8b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sznuz8b6l"/>`,
		"fallback": "tabler:trophy-off",
	});
}

export default Component;
