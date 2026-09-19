import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2977i58y.css';
import '../../css/n/nyrlfqbzd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2977i58y"/><path class="nyrlfqbzd"/>`,
		"fallback": "ep:unlock",
	});
}

export default Component;
