import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9s-e-3im.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9s-e-3im"/>`,
		"fallback": "selfhst:nextcloud-forms-dark",
	});
}

export default Component;
