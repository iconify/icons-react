import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/n07-27byw.css';
import '../../css/q/qw5luvbyp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><circle class="n07-27byw"/><path class="qw5luvbyp"/></g>`,
		"fallback": "glyphs-poly:signal",
	});
}

export default Component;
