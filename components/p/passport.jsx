import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6xcxzbol.css';
import '../../css/w/wdo02gbao.css';
import '../../css/b/bzea6tsoy.css';
import '../../css/q/qq0d7y3ml.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6xcxzbol"/><path class="wdo02gbao"/><path class="bzea6tsoy"/><path class="qq0d7y3ml"/>`,
		"fallback": "devicon:passport",
	});
}

export default Component;
