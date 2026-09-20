import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unfk_pn7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="unfk_pn7g"/>`,
		"fallback": "reicon:paperclip4-filled",
	});
}

export default Component;
