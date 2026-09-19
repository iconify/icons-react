import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ebn63x7qu.css';
import '../../css/w/wrbt1_brp.css';
import '../../css/c/c_np0hcqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ebn63x7qu"/><path class="wrbt1_brp"/><path class="c_np0hcqm"/></g>`,
		"fallback": "gg:media-live",
	});
}

export default Component;
