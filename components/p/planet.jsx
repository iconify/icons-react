import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cdmq_dbpb.css';
import '../../css/l/l_yo8ul4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cdmq_dbpb"/><path class="l_yo8ul4e"/></g>`,
		"fallback": "streamline:planet",
	});
}

export default Component;
