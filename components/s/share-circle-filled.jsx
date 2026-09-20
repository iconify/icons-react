import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytwqe3upy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytwqe3upy"/>`,
		"fallback": "reicon:share-circle-filled",
	});
}

export default Component;
