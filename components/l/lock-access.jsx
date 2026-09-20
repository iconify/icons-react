import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdaijo30p.css';
import '../../css/j/jevxj9zcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdaijo30p"/><path class="jevxj9zcd"/>`,
		"fallback": "uim:lock-access",
	});
}

export default Component;
