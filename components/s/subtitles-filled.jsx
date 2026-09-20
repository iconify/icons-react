import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2p3jbbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l2p3jbbvw"/>`,
		"fallback": "reicon:subtitles-filled",
	});
}

export default Component;
