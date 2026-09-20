import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb5i6giuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb5i6giuz"/>`,
		"fallback": "tabler:user-cancel",
	});
}

export default Component;
