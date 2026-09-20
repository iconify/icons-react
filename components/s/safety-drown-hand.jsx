import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knumxct5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knumxct5j"/>`,
		"fallback": "streamline-ultimate:safety-drown-hand",
	});
}

export default Component;
