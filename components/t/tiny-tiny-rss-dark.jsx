import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad91pccmh.css';
import '../../css/u/uq4weob1t.css';
import '../../css/a/a2trefbuk.css';
import '../../css/c/cf670p61w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle transform="rotate(-89.685 70.225 441.78)" class="ad91pccmh"/><path class="uq4weob1t"/><path class="a2trefbuk"/><path class="cf670p61w"/>`,
		"fallback": "selfhst:tiny-tiny-rss-dark",
	});
}

export default Component;
