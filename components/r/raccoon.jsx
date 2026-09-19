import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhjalw2tn.css';
import '../../css/c/crl47bb3t.css';
import '../../css/j/j4lnu5b0r.css';
import '../../css/g/gkfjuxvzv.css';
import '../../css/f/fbzg1sspd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nhjalw2tn"/><path class="crl47bb3t"/><path class="j4lnu5b0r"/><path class="gkfjuxvzv"/><path class="fbzg1sspd"/></g>`,
		"fallback": "fluent-emoji-flat:raccoon",
	});
}

export default Component;
