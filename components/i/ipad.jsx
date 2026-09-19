import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq_ba2bfa.css';
import '../../css/a/ahe_qiacf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iq_ba2bfa"/><path clip-rule="evenodd" class="ahe_qiacf"/>`,
		"fallback": "flat-ui:ipad",
	});
}

export default Component;
