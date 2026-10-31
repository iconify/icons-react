import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hdok4feqm.css';
import '../../css/z/z1p0jfzmb.css';
import '../../css/j/jpb3v2njc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="hdok4feqm"/><path class="z1p0jfzmb"/><path class="jpb3v2njc"/></g>`,
		"fallback": "struq:notes",
	});
}

export default Component;
