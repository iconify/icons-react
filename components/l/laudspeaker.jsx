import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko_s50v2q.css';
import '../../css/k/k0au53bzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko_s50v2q"/><path class="k0au53bzy"/>`,
		"fallback": "selfhst:laudspeaker",
	});
}

export default Component;
