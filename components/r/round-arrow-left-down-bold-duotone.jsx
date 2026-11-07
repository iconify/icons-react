import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtmuzrg2o.css';
import '../../css/k/kcxg56bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtmuzrg2o"/><path class="kcxg56bct"/>`,
		"fallback": "solar:round-arrow-left-down-bold-duotone",
	});
}

export default Component;
