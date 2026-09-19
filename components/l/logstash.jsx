import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oopsgunny.css';
import '../../css/e/eq6f2obhm.css';
import '../../css/u/uxyj568bx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oopsgunny"/><path class="eq6f2obhm"/><path class="uxyj568bx"/>`,
		"fallback": "devicon:logstash",
	});
}

export default Component;
