import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs6ffwolm.css';
import '../../css/o/oiec-xb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs6ffwolm"/><path clip-rule="evenodd" class="oiec-xb0s"/>`,
		"fallback": "qlementine-icons:open-recent-24",
	});
}

export default Component;
