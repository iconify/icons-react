import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejxafrb5z.css';
import '../../css/l/ls85y2czm.css';
import '../../css/p/pb8rmtbxv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejxafrb5z"/><path class="ls85y2czm"/><path class="pb8rmtbxv"/>`,
		"fallback": "selfhst:ksuite-manager-dark",
	});
}

export default Component;
