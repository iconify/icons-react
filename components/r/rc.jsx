import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqo72weep.css';
import '../../css/h/h339_5zrx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqo72weep"/><path class="h339_5zrx"/>`,
		"fallback": "material-icon-theme:rc",
	});
}

export default Component;
