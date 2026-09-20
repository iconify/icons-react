import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofqds83lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofqds83lo"/>`,
		"fallback": "material-icon-theme:php-cs-fixer",
	});
}

export default Component;
