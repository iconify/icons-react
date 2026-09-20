import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eslh_yutq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eslh_yutq"/>`,
		"fallback": "selfhst:servarr-dark",
	});
}

export default Component;
