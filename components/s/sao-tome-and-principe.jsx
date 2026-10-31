import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq301s8ar.css';
import '../../css/q/q29bstbxv.css';
import '../../css/p/p9wivw-rv.css';
import '../../css/t/t-r1be3eu.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq301s8ar"/><path class="q29bstbxv"/><path class="p9wivw-rv"/><path class="t-r1be3eu"/>`,
		"fallback": "tabler-flags:sao-tome-and-principe",
	});
}

export default Component;
