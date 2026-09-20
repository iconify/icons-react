import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv7e-pbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv7e-pbsk"/>`,
		"fallback": "tdesign:mobile-list",
	});
}

export default Component;
