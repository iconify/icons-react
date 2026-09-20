import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge2f5cbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge2f5cbud"/>`,
		"fallback": "tdesign:thumb-down-1-filled",
	});
}

export default Component;
