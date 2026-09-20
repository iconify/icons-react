import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buki-ebqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buki-ebqw"/>`,
		"fallback": "reicon:textalign-center-filled",
	});
}

export default Component;
