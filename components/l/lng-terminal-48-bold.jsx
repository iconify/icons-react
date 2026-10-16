import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xona1pb7d.css';
import '../../css/c/cnes96yjo.css';
import '../../css/o/oe0sopmij.css';
import '../../css/b/b1vrjkb0q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xona1pb7d"/><path class="cnes96yjo"/><path class="oe0sopmij"/><path class="b1vrjkb0q"/>`,
		"fallback": "energy-icons:lng-terminal-48-bold",
	});
}

export default Component;
