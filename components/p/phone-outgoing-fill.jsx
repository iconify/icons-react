import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8ofd0bhe.css';
import '../../css/m/m4slzdbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8ofd0bhe"/><path class="m4slzdbss"/>`,
		"fallback": "mage:phone-outgoing-fill",
	});
}

export default Component;
