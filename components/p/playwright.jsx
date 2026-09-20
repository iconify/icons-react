import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvv31odee.css';
import '../../css/c/c8c70ibjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvv31odee"/><path class="c8c70ibjc"/>`,
		"fallback": "material-icon-theme:playwright",
	});
}

export default Component;
