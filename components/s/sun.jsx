import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojke0rlcu.css';
import '../../css/o/ocbn0jbob.css';
import '../../css/v/vggz4i0-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer ojke0rlcu"/><path class="duoicon-secondary-layer ocbn0jbob"/><path class="duoicon-primary-layer vggz4i0-j"/>`,
		"fallback": "duo-icons:sun",
	});
}

export default Component;
