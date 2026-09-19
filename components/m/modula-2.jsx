import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt8dqmswc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt8dqmswc"/>`,
		"fallback": "file-icons:modula-2",
	});
}

export default Component;
