import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9xv9fbxk.css';
import '../../css/o/o62a0f6-k.css';
import '../../css/r/r1nlp87ts.css';
import '../../css/p/p1na_acup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9xv9fbxk wm-k"/><path class="o62a0f6-k wm-k"/><path class="r1nlp87ts wm-s"/><path class="p1na_acup wm-s"/>`,
		"fallback": "withicons-bauhaus:phone-outgoing",
	});
}

export default Component;
