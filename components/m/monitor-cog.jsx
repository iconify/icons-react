import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t47ud5bbm.css';
import '../../css/z/zhrn__bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t47ud5bbm"/><path class="zhrn__bdx"/></g>`,
		"fallback": "vadivam:monitor-cog",
	});
}

export default Component;
