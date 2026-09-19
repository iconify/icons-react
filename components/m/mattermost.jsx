import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw4uyb9sl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw4uyb9sl"/>`,
		"fallback": "cib:mattermost",
	});
}

export default Component;
