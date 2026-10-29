import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx17i_97r.css';
import '../../css/r/rnza0sb-x.css';
import '../../css/k/ke-2t-fwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx17i_97r wm-a"/><path class="rnza0sb-x wm-k"/><path class="ke-2t-fwz wm-k"/>`,
		"fallback": "withicons-bauhaus:paintbrush",
	});
}

export default Component;
