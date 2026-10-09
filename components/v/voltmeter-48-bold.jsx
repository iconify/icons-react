import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtgmy3b7z.css';
import '../../css/g/gfcluhb8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtgmy3b7z"/><path class="gfcluhb8w"/>`,
		"fallback": "energy-icons:voltmeter-48-bold",
	});
}

export default Component;
