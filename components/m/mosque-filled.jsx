import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld4ywrboa.css';
import '../../css/q/qsvb7nb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld4ywrboa"/><path class="qsvb7nb9i"/>`,
		"fallback": "tdesign:mosque-filled",
	});
}

export default Component;
