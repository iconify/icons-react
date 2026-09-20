import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zto3li8fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zto3li8fc"/>`,
		"fallback": "material-icon-theme:pdf",
	});
}

export default Component;
