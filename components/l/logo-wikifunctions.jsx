import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6v83qbqk.css';
import '../../css/c/c1ks9gyit.css';
import '../../css/a/azcv31byt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6v83qbqk"/><path class="c1ks9gyit"/><path class="azcv31byt"/>`,
		"fallback": "ooui:logo-wikifunctions",
	});
}

export default Component;
