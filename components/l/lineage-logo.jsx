import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wu3_ufllg.css';
import '../../css/j/jkkdn5t7q.css';
import '../../css/e/ev-dp8mol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="wu3_ufllg"/><path class="jkkdn5t7q"/><path class="ev-dp8mol"/></g>`,
		"fallback": "streamline-logos:lineage-logo",
	});
}

export default Component;
