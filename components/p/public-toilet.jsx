import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/t/t7q-hstoq.css';
import '../../css/y/ymiwr7boi.css';
import '../../css/j/jkdgwhusy.css';
import '../../css/y/y96k8d55x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><circle class="t7q-hstoq"/><circle class="ymiwr7boi"/><path class="jkdgwhusy"/><path class="y96k8d55x"/></g>`,
		"fallback": "icon-park:public-toilet",
	});
}

export default Component;
