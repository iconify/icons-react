import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njca8dbxl.css';
import '../../css/a/as0inn2-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njca8dbxl"/><path class="as0inn2-g"/>`,
		"fallback": "material-icon-theme:vue",
	});
}

export default Component;
