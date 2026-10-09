import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz-knsbvd.css';
import '../../css/u/umxpd67pc.css';
import '../../css/u/usgxssb2k.css';
import '../../css/r/rnrvi0mga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz-knsbvd"/><path class="umxpd67pc"/><path class="usgxssb2k"/><path class="rnrvi0mga"/>`,
		"fallback": "energy-icons:thermometer-snowflake-48-bold",
	});
}

export default Component;
