import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z84a-ivde.css';
import '../../css/e/eswlvl1ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="z84a-ivde"/><path class="eswlvl1ki"/></g>`,
		"fallback": "struq:video",
	});
}

export default Component;
