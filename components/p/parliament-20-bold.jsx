import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkzmacc8l.css';
import '../../css/a/a4qgedb8h.css';
import '../../css/t/ta45wzagz.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkzmacc8l"/><path class="a4qgedb8h"/><path class="ta45wzagz"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:parliament-20-bold",
	});
}

export default Component;
