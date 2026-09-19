import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owrpg8bqi.css';
import '../../css/a/ani5aab9r.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owrpg8bqi"/><path class="ani5aab9r"/>`,
		"fallback": "gis:tags",
	});
}

export default Component;
