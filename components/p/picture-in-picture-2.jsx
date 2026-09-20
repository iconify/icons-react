import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq-brsbev.css';
import '../../css/c/cqy661b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jq-brsbev"/><rect class="cqy661b-a"/></g>`,
		"fallback": "lucide:picture-in-picture-2",
	});
}

export default Component;
