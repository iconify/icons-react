import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9c7k7buf.css';
import '../../css/d/deqru1bcw.css';
import '../../css/r/r2g2ubnfk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9c7k7buf"/><path class="deqru1bcw"/><path class="r2g2ubnfk"/>`,
		"fallback": "energy-icons:park-and-ride-20",
	});
}

export default Component;
