import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_-jdccjs.css';
import '../../css/s/sg9i7d4jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_-jdccjs"/><rect class="sg9i7d4jt"/>`,
		"fallback": "uim:lock",
	});
}

export default Component;
