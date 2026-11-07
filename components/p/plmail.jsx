import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9jpdwaln.css';
import '../../css/s/s90wc0pdg.css';
import '../../css/t/t2-4x2q-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9jpdwaln"/><path class="s90wc0pdg"/><path class="t2-4x2q-z"/>`,
		"fallback": "selfhst:plmail",
	});
}

export default Component;
