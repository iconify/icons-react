import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h3h34hegb.css';
import '../../css/s/svud4fz-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h3h34hegb"/><path class="svud4fz-r"/></g>`,
		"fallback": "lucide-extended:turntable-filled",
	});
}

export default Component;
