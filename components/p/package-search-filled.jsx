import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/khro40bbz.css';
import '../../css/y/ye21pdjzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="khro40bbz"/><path class="ye21pdjzv"/></g>`,
		"fallback": "lucide-extended:package-search-filled",
	});
}

export default Component;
