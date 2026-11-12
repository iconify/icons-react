import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt1h_uz7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt1h_uz7v"/>`,
		"fallback": "selfhst:matterbridge-dark",
	});
}

export default Component;
