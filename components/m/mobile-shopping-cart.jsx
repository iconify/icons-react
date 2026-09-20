import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/aagj8rb-s.css';
import '../../css/t/ts9ku-_3j.css';
import '../../css/x/xtd5vdbdb.css';
import '../../css/l/lnoconbjb.css';
import '../../css/e/e213_db7s.css';
import '../../css/c/cbikig4ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="aagj8rb-s"/><path class="ts9ku-_3j"/><path class="xtd5vdbdb"/><path class="lnoconbjb"/><path class="e213_db7s"/><path class="cbikig4ca"/></g>`,
		"fallback": "streamline-freehand-color:mobile-shopping-cart",
	});
}

export default Component;
