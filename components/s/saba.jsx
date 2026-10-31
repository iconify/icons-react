import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha86pmbhz.css';
import '../../css/e/enwgtzkop.css';
import '../../css/j/jxlfcwbvb.css';
import '../../css/i/ic7wmfzxq.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha86pmbhz"/><path class="enwgtzkop"/><path class="jxlfcwbvb"/><path class="ic7wmfzxq"/>`,
		"fallback": "tabler-flags:saba",
	});
}

export default Component;
