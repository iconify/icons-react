import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7zezab6w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7zezab6w"/>`,
		"fallback": "pinhead:person-skiing-downhill",
	});
}

export default Component;
