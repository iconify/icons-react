import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi856n_4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi856n_4g"/>`,
		"fallback": "icon-park:left-one",
	});
}

export default Component;
