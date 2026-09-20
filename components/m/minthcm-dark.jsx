import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipg2vo4ij.css';
import '../../css/r/r5kkk1v3q.css';
import '../../css/k/kb0y4vb8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipg2vo4ij"/><path class="r5kkk1v3q"/><path class="kb0y4vb8f"/>`,
		"fallback": "selfhst:minthcm-dark",
	});
}

export default Component;
