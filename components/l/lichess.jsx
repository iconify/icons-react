import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li9cd2o_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b li9cd2o_m"/>`,
		"fallback": "bxl:lichess",
	});
}

export default Component;
