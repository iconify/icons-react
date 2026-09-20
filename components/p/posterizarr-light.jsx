import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbq9ndbdb.css';
import '../../css/y/y_egkjrzy.css';
import '../../css/y/ygz4qzbqo.css';
import '../../css/z/zje8mx_wr.css';
import '../../css/h/hlak8bugu.css';
import '../../css/e/e6raucbai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbq9ndbdb"/><path class="y_egkjrzy"/><path class="ygz4qzbqo"/><path class="zje8mx_wr"/><path class="hlak8bugu"/><path class="e6raucbai"/>`,
		"fallback": "selfhst:posterizarr-light",
	});
}

export default Component;
