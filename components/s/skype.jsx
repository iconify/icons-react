import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkprlx1pi.css';
import '../../css/i/id8zlgdpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkprlx1pi"/><path class="id8zlgdpt"/>`,
		"fallback": "uim:skype",
	});
}

export default Component;
