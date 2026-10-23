import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq4hckazh.css';
import '../../css/q/q20ydo2qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tq4hckazh"/><path class="q20ydo2qh"/></g>`,
		"fallback": "vadivam:lamp-desk",
	});
}

export default Component;
