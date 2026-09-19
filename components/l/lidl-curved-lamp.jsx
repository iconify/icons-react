import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajfu422ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajfu422ja"/>`,
		"fallback": "cbi:lidl-curved-lamp",
	});
}

export default Component;
