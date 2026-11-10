import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eumdw4bow.css';
import '../../css/f/ft0ai_b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eumdw4bow"/><path class="ft0ai_b4l"/></g>`,
		"fallback": "tabler:mail-flame",
	});
}

export default Component;
