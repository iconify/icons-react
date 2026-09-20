import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciwz-hzdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciwz-hzdc"/>`,
		"fallback": "thesvg:katana",
	});
}

export default Component;
