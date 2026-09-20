import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojys8bbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojys8bbso"/>`,
		"fallback": "tabler:navigation-pin",
	});
}

export default Component;
