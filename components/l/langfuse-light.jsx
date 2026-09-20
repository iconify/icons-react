import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxkuzfo0h.css';
import '../../css/a/agf0fzowr.css';
import '../../css/z/z6ht7j0ad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxkuzfo0h"/><path class="agf0fzowr"/><path class="z6ht7j0ad"/>`,
		"fallback": "selfhst:langfuse-light",
	});
}

export default Component;
