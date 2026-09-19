import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4x30vbts.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4x30vbts"/>`,
		"fallback": "f7:text-badge-checkmark",
	});
}

export default Component;
