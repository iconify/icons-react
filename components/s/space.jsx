import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndjxw_bam.css';
import '../../css/p/p2vf_po5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndjxw_bam"/><path class="p2vf_po5s"/>`,
		"fallback": "token:space",
	});
}

export default Component;
