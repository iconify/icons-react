import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/svp4mtwbr.css';
import '../../css/n/ng7-lg29j.css';
import '../../css/j/jdxmchbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="svp4mtwbr"/><path class="ng7-lg29j"/><path class="jdxmchbqf"/></g>`,
		"fallback": "tabler:stack-back",
	});
}

export default Component;
