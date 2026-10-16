import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgga-fb4g.css';
import '../../css/s/sw35zxvtr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgga-fb4g"/><path class="sw35zxvtr"/>`,
		"fallback": "energy-icons:pipeline-pig-48",
	});
}

export default Component;
