import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogz2-tlnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogz2-tlnc"/>`,
		"fallback": "tdesign:tornado",
	});
}

export default Component;
