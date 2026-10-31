import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut5alpn7y.css';
import '../../css/a/ayvad0bop.css';
import '../../css/s/sk2004k5x.css';
import '../../css/b/btafzwbih.css';
import '../../css/w/w7tooacnu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut5alpn7y"/><path class="ayvad0bop"/><path class="sk2004k5x"/><path class="btafzwbih"/><path class="w7tooacnu"/>`,
		"fallback": "iconito:orange",
	});
}

export default Component;
