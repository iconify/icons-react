import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln608z_bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln608z_bq"/>`,
		"fallback": "octicon:person-24",
	});
}

export default Component;
