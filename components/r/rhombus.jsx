import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk3eon_gw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk3eon_gw"/>`,
		"fallback": "f7:rhombus",
	});
}

export default Component;
