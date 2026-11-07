import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/augjxln2c.css';
import '../../css/c/c1ebsvb3l.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="augjxln2c"/><path class="c1ebsvb3l"/><path clip-rule="evenodd" class="nbozb93jk"/>`,
		"fallback": "solar:programming-outline",
	});
}

export default Component;
