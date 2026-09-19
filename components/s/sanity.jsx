import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-5ogob0g.css';
import '../../css/i/il_nhwj0r.css';
import '../../css/d/dh0pfppzw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-5ogob0g"/><path class="il_nhwj0r"/><path class="dh0pfppzw"/>`,
		"fallback": "devicon:sanity",
	});
}

export default Component;
