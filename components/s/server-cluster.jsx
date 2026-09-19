import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpg4mpn-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpg4mpn-s"/>`,
		"fallback": "grommet-icons:server-cluster",
	});
}

export default Component;
