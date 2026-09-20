import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/si42fdqfd.css';
import '../../css/z/zmle5ph7m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="si42fdqfd"/><path class="zmle5ph7m"/></g>`,
		"fallback": "pepicons-pencil:triangle-up-filled",
	});
}

export default Component;
