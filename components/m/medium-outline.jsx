import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u63daxw1l.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u63daxw1l"/><path clip-rule="evenodd" class="daxtkab1a"/>`,
		"fallback": "basil:medium-outline",
	});
}

export default Component;
