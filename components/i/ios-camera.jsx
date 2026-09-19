import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrcd7qbgp.css';
import '../../css/b/b8kj2gpmh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mrcd7qbgp"/><path class="b8kj2gpmh"/>`,
		"fallback": "ion:ios-camera",
	});
}

export default Component;
