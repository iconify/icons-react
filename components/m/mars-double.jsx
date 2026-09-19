import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6en0pyme.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6en0pyme"/>`,
		"fallback": "fontisto:mars-double",
	});
}

export default Component;
