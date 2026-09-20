import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erfttll9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erfttll9q"/>`,
		"fallback": "selfhst:pairdrop-light",
	});
}

export default Component;
