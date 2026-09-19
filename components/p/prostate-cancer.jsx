import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk5pfezkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rk5pfezkm"/>`,
		"fallback": "healthicons:prostate-cancer",
	});
}

export default Component;
