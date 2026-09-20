import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf8n7mb7y.css';
import '../../css/z/zcurb14eq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf8n7mb7y"/><path class="zcurb14eq"/>`,
		"fallback": "selfhst:jeedom",
	});
}

export default Component;
