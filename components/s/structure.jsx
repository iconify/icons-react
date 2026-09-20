import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/i/ixunwlb5p.css';
import '../../css/m/mpqx78bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="ixunwlb5p"/><path class="mpqx78bqh"/></g>`,
		"fallback": "lets-icons:structure",
	});
}

export default Component;
