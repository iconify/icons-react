import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3c4wab0s.css';
import '../../css/a/ay474ak4m.css';
import '../../css/h/h-9zx8bmp.css';
import '../../css/v/vnutggnhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3c4wab0s"/><path class="ay474ak4m"/><path class="h-9zx8bmp"/><path class="vnutggnhe"/>`,
		"fallback": "thesvg-color:pairdrop",
	});
}

export default Component;
