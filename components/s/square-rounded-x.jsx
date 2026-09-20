import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv30cvl2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv30cvl2r"/>`,
		"fallback": "tabler:square-rounded-x",
	});
}

export default Component;
