import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwmf6ebpj.css';
import '../../css/f/f3xfz4hac.css';
import '../../css/o/ose_erblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iwmf6ebpj"/><path clip-rule="evenodd" class="f3xfz4hac"/><path class="ose_erblr"/></g>`,
		"fallback": "lets-icons:view-hide-light",
	});
}

export default Component;
