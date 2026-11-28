import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ommrk5bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ommrk5bhu"/>`,
		"fallback": "noviair:package-check",
	});
}

export default Component;
