import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm52v9brw.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm52v9brw"/>`,
		"fallback": "jam:set-forward-square-f",
	});
}

export default Component;
