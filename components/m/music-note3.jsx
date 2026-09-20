import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvkuugb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rvkuugb-y"/>`,
		"fallback": "reicon:music-note3",
	});
}

export default Component;
