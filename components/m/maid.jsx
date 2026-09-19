import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smv78gb2a.css';
import '../../css/g/gdr6p71vl.css';
import '../../css/a/a5n3-3bfp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="smv78gb2a"/><path class="gdr6p71vl"/><path class="a5n3-3bfp"/></g>`,
		"fallback": "cryptocurrency:maid",
	});
}

export default Component;
