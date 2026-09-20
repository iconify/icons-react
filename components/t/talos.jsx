import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b20yb556g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b20yb556g"/>`,
		"fallback": "thesvg-color:talos",
	});
}

export default Component;
