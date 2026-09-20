import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0pjquxkp.css';
import '../../css/u/uf98ujb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0pjquxkp"/><path class="uf98ujb9z"/>`,
		"fallback": "streamline-ultimate:microsoft-onedrive-logo-2-bold",
	});
}

export default Component;
