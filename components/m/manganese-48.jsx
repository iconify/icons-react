import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa8mtjico.css';
import '../../css/l/l62m84s6k.css';
import '../../css/y/y-2ykkrlo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa8mtjico"/><path class="l62m84s6k"/><path class="y-2ykkrlo"/>`,
		"fallback": "energy-icons:manganese-48",
	});
}

export default Component;
