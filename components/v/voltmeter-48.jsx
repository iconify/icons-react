import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndoo8eizj.css';
import '../../css/n/npq26_zsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndoo8eizj"/><path class="npq26_zsi"/>`,
		"fallback": "energy-icons:voltmeter-48",
	});
}

export default Component;
