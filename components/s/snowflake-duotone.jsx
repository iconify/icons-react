import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/orbkf2b9q.css';
import '../../css/y/yn9il7ume.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="orbkf2b9q"/><path class="yn9il7ume"/></g>`,
		"fallback": "reicon:snowflake-duotone",
	});
}

export default Component;
