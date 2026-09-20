import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e27bjtb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e27bjtb7g"/>`,
		"fallback": "material-icon-theme:percy",
	});
}

export default Component;
