import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i7zefz_vm.css';
import '../../css/m/mon-aeb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i7zefz_vm"/><path class="mon-aeb-a"/></g>`,
		"fallback": "streamline-freehand:money-atm-withdraw",
	});
}

export default Component;
