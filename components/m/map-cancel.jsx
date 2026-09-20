import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf40rc43n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf40rc43n"/>`,
		"fallback": "tabler:map-cancel",
	});
}

export default Component;
