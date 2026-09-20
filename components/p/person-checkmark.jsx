import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jta17kyxk.css';
import '../../css/v/v0j0qihdv.css';
import '../../css/o/oby_l4d-i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jta17kyxk"/><path class="v0j0qihdv"/><path class="oby_l4d-i"/></g>`,
		"fallback": "pepicons-pencil:person-checkmark",
	});
}

export default Component;
