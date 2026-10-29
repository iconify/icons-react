import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz5lihbyw.css';
import '../../css/r/r-5a6yibn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz5lihbyw wm-k"/><path class="r-5a6yibn wm-a"/>`,
		"fallback": "withicons-bauhaus:signature",
	});
}

export default Component;
