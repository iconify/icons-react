import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bihy864ah.css';
import '../../css/d/dqj7b7byu.css';
import '../../css/i/imo26mlcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bihy864ah"/><path class="dqj7b7byu"/><path class="imo26mlcc"/></g>`,
		"fallback": "tabler:tag-heart",
	});
}

export default Component;
