import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kffahnbbr.css';
import '../../css/m/mozq0wb3k.css';
import '../../css/m/mgux98c7x.css';
import '../../css/n/nltiuzm9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kffahnbbr"/><path clip-rule="evenodd" class="mozq0wb3k"/><path clip-rule="evenodd" class="mgux98c7x"/><path class="nltiuzm9b"/>`,
		"fallback": "token:vr",
	});
}

export default Component;
