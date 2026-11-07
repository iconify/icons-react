import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwulmx5uf.css';
import '../../css/j/j07o9nb5s.css';
import '../../css/j/jlk36hbcb.css';
import '../../css/x/xcn7pebsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwulmx5uf"/><path class="j07o9nb5s"/><path class="jlk36hbcb"/><path class="xcn7pebsh"/>`,
		"fallback": "solar:mask-happy-bold-duotone",
	});
}

export default Component;
