import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db9zpw_db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db9zpw_db"/>`,
		"fallback": "pixelarticons:list-box",
	});
}

export default Component;
