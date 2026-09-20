import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-bzdbb5h.css';
import '../../css/i/ij-ynac5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-bzdbb5h"/><path class="ij-ynac5j"/>`,
		"fallback": "streamline-ultimate:make-up-mirror-1-bold",
	});
}

export default Component;
