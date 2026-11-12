import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt6m2xbua.css';
import '../../css/u/u9cjpybxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt6m2xbua"/><path class="u9cjpybxq"/>`,
		"fallback": "selfhst:sure-finance",
	});
}

export default Component;
