import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac7p6yblo.css';
import '../../css/n/njy6bmz6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac7p6yblo"/><path class="njy6bmz6d"/>`,
		"fallback": "energy-icons:wattmeter-48",
	});
}

export default Component;
