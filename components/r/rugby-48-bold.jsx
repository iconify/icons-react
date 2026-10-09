import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5tmhcqgt.css';
import '../../css/z/zxkwv-2ro.css';
import '../../css/a/aary-jtpv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5tmhcqgt"/><path class="zxkwv-2ro"/><path class="aary-jtpv"/>`,
		"fallback": "energy-icons:rugby-48-bold",
	});
}

export default Component;
