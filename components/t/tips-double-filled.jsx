import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3tt_w7bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3tt_w7bl"/>`,
		"fallback": "tdesign:tips-double-filled",
	});
}

export default Component;
