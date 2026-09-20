import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkraa1b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkraa1b9f"/>`,
		"fallback": "reicon:phone-chat",
	});
}

export default Component;
