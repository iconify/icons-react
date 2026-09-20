import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj05dub6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj05dub6s"/>`,
		"fallback": "thesvg:semantic-ui",
	});
}

export default Component;
