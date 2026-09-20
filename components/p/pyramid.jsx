import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu0-9jbgz.css';
import '../../css/b/bcicu-lke.css';
import '../../css/n/ngoqse87p.css';
import '../../css/k/kb-5n5j8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wu0-9jbgz"/><path class="bcicu-lke"/><path class="ngoqse87p"/><path class="kb-5n5j8g"/></g>`,
		"fallback": "tdesign:pyramid",
	});
}

export default Component;
