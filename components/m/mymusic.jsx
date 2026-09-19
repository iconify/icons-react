import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi8ojbzph.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi8ojbzph"/>`,
		"fallback": "whh:mymusic",
	});
}

export default Component;
