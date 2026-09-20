import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iycln-b8i.css';
import '../../css/a/art3-jbxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="iycln-b8i"/><path class="art3-jbxi"/>`,
		"fallback": "selfhst:pocket-id",
	});
}

export default Component;
