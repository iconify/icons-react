import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kscmlob8u.css';
import '../../css/y/yynh_dbio.css';
import '../../css/n/nu071yljs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kscmlob8u"/><path class="yynh_dbio"/><path class="nu071yljs"/>`,
		"fallback": "energy-icons:transformer-pole-48",
	});
}

export default Component;
