import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2eos6b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2eos6b6s"/>`,
		"fallback": "cbi:picnic",
	});
}

export default Component;
