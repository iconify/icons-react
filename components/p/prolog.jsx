import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdd2fk6kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdd2fk6kc"/>`,
		"fallback": "material-icon-theme:prolog",
	});
}

export default Component;
