import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztzz4wb2d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztzz4wb2d"/>`,
		"fallback": "devicon:mattermost",
	});
}

export default Component;
