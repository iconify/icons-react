import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d61ve0b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d61ve0b8d"/>`,
		"fallback": "griddy-icons:link-alt-02",
	});
}

export default Component;
