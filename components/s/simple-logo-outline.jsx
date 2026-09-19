import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p_va-xb5a.css';
import '../../css/n/ni4czkxgb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p_va-xb5a"/><path class="ni4czkxgb"/></g>`,
		"fallback": "healthicons:simple-logo-outline",
	});
}

export default Component;
