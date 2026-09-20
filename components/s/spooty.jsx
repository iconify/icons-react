import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8v29kb-y.css';
import '../../css/n/n0l6v6lws.css';
import '../../css/w/wizgh3bae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o8v29kb-y"/><path class="n0l6v6lws"/><path class="wizgh3bae"/>`,
		"fallback": "selfhst:spooty",
	});
}

export default Component;
