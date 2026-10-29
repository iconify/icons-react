import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n98cf37tu.css';
import '../../css/f/fng64t6ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="n98cf37tu"/><path class="fng64t6ih wm-a"/></g>`,
		"fallback": "withicons:umbrella-solid",
	});
}

export default Component;
