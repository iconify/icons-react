import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fn7f-4bhd.css';
import '../../css/p/pn6z_7sis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fn7f-4bhd"/><path class="pn6z_7sis"/></g>`,
		"fallback": "coolicons:slack-duocolor-round",
	});
}

export default Component;
