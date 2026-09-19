import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajcl8c7el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajcl8c7el"/>`,
		"fallback": "cbi:reolink-e1",
	});
}

export default Component;
