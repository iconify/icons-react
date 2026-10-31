import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zoyzmtr8d.css';
import '../../css/s/smxirpa0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="zoyzmtr8d"/><path class="smxirpa0a"/></g>`,
		"fallback": "struq:theme-light",
	});
}

export default Component;
