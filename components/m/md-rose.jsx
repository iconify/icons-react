import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nztsp1ouo.css';
import '../../css/a/a47udl32t.css';
import '../../css/k/kzt8tebac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nztsp1ouo"/><path class="a47udl32t"/><path class="kzt8tebac"/>`,
		"fallback": "ion:md-rose",
	});
}

export default Component;
