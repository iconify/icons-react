import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb4fgob2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb4fgob2t"/>`,
		"fallback": "noviair:skateboard",
	});
}

export default Component;
