import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1lk6rsix.css';
import '../../css/n/n87-cwb4y.css';
import '../../css/c/cbkcz0b8n.css';
import '../../css/s/sm1_6dbza.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1lk6rsix"/><path class="n87-cwb4y"/><path class="cbkcz0b8n"/><path class="sm1_6dbza"/>`,
		"fallback": "selfhst:sendgrid-dark",
	});
}

export default Component;
