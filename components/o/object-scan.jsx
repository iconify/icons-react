import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heinhra0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heinhra0j"/>`,
		"fallback": "tabler:object-scan",
	});
}

export default Component;
