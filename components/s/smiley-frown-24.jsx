import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldiu6s_fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldiu6s_fd"/>`,
		"fallback": "octicon:smiley-frown-24",
	});
}

export default Component;
