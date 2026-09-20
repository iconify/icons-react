import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkl81gx0s.css';
import '../../css/e/eevvws5ct.css';
import '../../css/h/hol_21ctj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nkl81gx0s"/><path class="eevvws5ct"/><path class="hol_21ctj"/>`,
		"fallback": "selfhst:lidarr",
	});
}

export default Component;
