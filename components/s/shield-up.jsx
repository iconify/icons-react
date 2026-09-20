import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocri5bbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocri5bbso"/>`,
		"fallback": "tabler:shield-up",
	});
}

export default Component;
