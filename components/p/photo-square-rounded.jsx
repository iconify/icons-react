import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ur7rt5fas.css';
import '../../css/e/eg76xwbic.css';
import '../../css/j/jno4cqb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ur7rt5fas"/><path class="eg76xwbic"/><path class="jno4cqb6l"/></g>`,
		"fallback": "tabler:photo-square-rounded",
	});
}

export default Component;
