import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja_hni21a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja_hni21a"/>`,
		"fallback": "selfhst:opensuse-leap-light",
	});
}

export default Component;
