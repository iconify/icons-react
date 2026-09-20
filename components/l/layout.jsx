import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufbq6ycrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufbq6ycrq"/>`,
		"fallback": "streamline-ultimate:layout",
	});
}

export default Component;
