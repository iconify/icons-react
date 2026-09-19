import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtpw-r91t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gtpw-r91t"/>`,
		"fallback": "griddy-icons:lock-alt-02",
	});
}

export default Component;
