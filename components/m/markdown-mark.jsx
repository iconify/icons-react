import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2eg_5l7t.css';
import '../../css/x/xlm34w3pk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2eg_5l7t"/><path clip-rule="evenodd" class="xlm34w3pk"/>`,
		"fallback": "pajamas:markdown-mark",
	});
}

export default Component;
