import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as_6i4bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as_6i4bnd"/>`,
		"fallback": "tabler:wash-dry-dip",
	});
}

export default Component;
