import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb74u2v9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb74u2v9z"/>`,
		"fallback": "material-icon-theme:moonscript",
	});
}

export default Component;
