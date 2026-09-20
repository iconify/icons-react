import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha-ru_sez.css';
import '../../css/z/zuyihimme.css';
import '../../css/o/ob81ctbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha-ru_sez"/><path class="zuyihimme"/><path class="ob81ctbsn"/>`,
		"fallback": "thesvg-color:sambanova",
	});
}

export default Component;
