import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fujmtz99i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fujmtz99i"/>`,
		"fallback": "pajamas:smiley",
	});
}

export default Component;
