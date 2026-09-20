import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k1crmpbjj.css';
import '../../css/e/ezf39loby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k1crmpbjj"/><path class="ezf39loby"/></g>`,
		"fallback": "streamline-sharp:politics-vote-2-remix",
	});
}

export default Component;
