import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bll1o-bzb.css';
import '../../css/v/v-kzk1h6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bll1o-bzb"/><path class="v-kzk1h6b"/>`,
		"fallback": "selfhst:opensearch",
	});
}

export default Component;
