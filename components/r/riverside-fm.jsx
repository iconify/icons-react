import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7uinz_wv.css';
import '../../css/m/my4v-7bwq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7uinz_wv"/><path class="my4v-7bwq"/>`,
		"fallback": "selfhst:riverside-fm",
	});
}

export default Component;
