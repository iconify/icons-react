import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkje3ybpz.css';
import '../../css/t/tje1i_bou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkje3ybpz"/><path class="tje1i_bou"/>`,
		"fallback": "energy-icons:search-48",
	});
}

export default Component;
