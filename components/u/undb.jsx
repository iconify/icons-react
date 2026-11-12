import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pthh6ojyi.css';
import '../../css/v/vjphkobps.css';
import '../../css/z/ztgnliu0b.css';
import '../../css/i/ibu718bja.css';
import '../../css/l/lhx1jjn7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pthh6ojyi"/><path class="vjphkobps"/><path class="ztgnliu0b"/><path class="ibu718bja"/><path class="lhx1jjn7h"/>`,
		"fallback": "selfhst:undb",
	});
}

export default Component;
