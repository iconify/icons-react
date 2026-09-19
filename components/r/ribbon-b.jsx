import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxxj4et5j.css';
import '../../css/g/gn_ky95ky.css';
import '../../css/b/bc6mt2bvs.css';
import '../../css/j/jwzr-db4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxxj4et5j"/><path class="gn_ky95ky"/><g><path class="bc6mt2bvs"/><path class="jwzr-db4i"/></g>`,
		"fallback": "ion:ribbon-b",
	});
}

export default Component;
