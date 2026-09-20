import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unp_99osw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unp_99osw"/>`,
		"fallback": "selfhst:makers-vault",
	});
}

export default Component;
