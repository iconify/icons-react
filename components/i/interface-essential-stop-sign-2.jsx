import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhyxh_bqu.css';
import '../../css/g/gcf5i_czd.css';
import '../../css/g/gq800qhcx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhyxh_bqu"/><path class="gcf5i_czd"/><path class="gq800qhcx"/>`,
		"fallback": "streamline-pixel:interface-essential-stop-sign-2",
	});
}

export default Component;
