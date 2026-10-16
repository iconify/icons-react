import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjlkw135c.css';
import '../../css/h/hxvilxtxe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjlkw135c"/><path class="hxvilxtxe"/>`,
		"fallback": "energy-icons:warming-stripes-48",
	});
}

export default Component;
