import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqq7tyroa.css';
import '../../css/q/q062oc2hv.css';
import '../../css/l/lzkadnb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqq7tyroa"/><path class="q062oc2hv"/><path class="lzkadnb4b"/>`,
		"fallback": "withicons-bauhaus:panel-bottom",
	});
}

export default Component;
