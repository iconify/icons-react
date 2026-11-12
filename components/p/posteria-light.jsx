import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj112dvaa.css';
import '../../css/u/u79s_5bes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj112dvaa"/><path class="u79s_5bes"/>`,
		"fallback": "selfhst:posteria-light",
	});
}

export default Component;
