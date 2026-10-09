import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht5i-fb7m.css';
import '../../css/p/pa8jkb1da.css';
import '../../css/c/cfktgscfo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht5i-fb7m"/><path class="pa8jkb1da"/><path class="cfktgscfo"/>`,
		"fallback": "energy-icons:milk-carton-20",
	});
}

export default Component;
