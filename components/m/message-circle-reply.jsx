import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3m46nx7n.css';
import '../../css/s/s84ihjboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s3m46nx7n"/><path class="s84ihjboh"/></g>`,
		"fallback": "vadivam:message-circle-reply",
	});
}

export default Component;
