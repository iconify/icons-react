import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v2-brtbgo.css';
import '../../css/g/g21si69-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v2-brtbgo"/><path class="g21si69-f"/></g>`,
		"fallback": "streamline-plump:mail-setting-solid",
	});
}

export default Component;
