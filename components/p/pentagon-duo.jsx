import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl5rj6b3b.css';
import '../../css/l/las552baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xl5rj6b3b"/><path class="las552baf primary"/>`,
		"fallback": "iconaut:pentagon-duo",
	});
}

export default Component;
