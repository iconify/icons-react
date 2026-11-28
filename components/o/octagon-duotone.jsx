import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-_z_3qcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-_z_3qcg primary"/>`,
		"fallback": "iconaut:octagon-duotone",
	});
}

export default Component;
