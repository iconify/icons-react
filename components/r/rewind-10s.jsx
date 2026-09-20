import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncx9_cchy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ncx9_cchy"/>`,
		"fallback": "reicon:rewind-10s",
	});
}

export default Component;
