import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9cxv5r5f.css';
import '../../css/s/syrvrjq4y.css';
import '../../css/t/tcbpmlgll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9cxv5r5f"/><path class="syrvrjq4y"/><path class="tcbpmlgll"/>`,
		"fallback": "token:lyxe",
	});
}

export default Component;
