import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqb2gq5et.css';
import '../../css/o/o89-xrb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqb2gq5et"/><path class="o89-xrb8s"/>`,
		"fallback": "tdesign:queue-filled",
	});
}

export default Component;
