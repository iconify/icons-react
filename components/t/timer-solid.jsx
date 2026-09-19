import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2qapdb-t.css';
import '../../css/q/qdsfr5okm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2qapdb-t"/><path clip-rule="evenodd" class="qdsfr5okm"/>`,
		"fallback": "basil:timer-solid",
	});
}

export default Component;
