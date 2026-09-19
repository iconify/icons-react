import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyatedb_g.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyatedb_g"/>`,
		"fallback": "fa6-solid:location-pin",
	});
}

export default Component;
