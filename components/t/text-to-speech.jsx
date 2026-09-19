import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilq4mj0ny.css';
import '../../css/a/agps2ol2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilq4mj0ny"/><path class="agps2ol2u"/>`,
		"fallback": "gcp:text-to-speech",
	});
}

export default Component;
