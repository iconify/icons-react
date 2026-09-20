import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx35p2zye.css';
import '../../css/c/cszcplbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx35p2zye"/><path class="cszcplbvc"/>`,
		"fallback": "uim:java-script",
	});
}

export default Component;
