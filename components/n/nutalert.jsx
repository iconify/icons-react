import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz8cebuhr.css';
import '../../css/w/w9w5lybuw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz8cebuhr"/><path class="w9w5lybuw"/>`,
		"fallback": "selfhst:nutalert",
	});
}

export default Component;
