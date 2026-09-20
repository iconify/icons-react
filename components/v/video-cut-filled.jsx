import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgpur9bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rgpur9bsv"/>`,
		"fallback": "reicon:video-cut-filled",
	});
}

export default Component;
