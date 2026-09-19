import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lalqpdp_l.css';
import '../../css/f/f8sr_ibol.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lalqpdp_l"/><path class="f8sr_ibol"/>`,
		"fallback": "fontisto:snowflake-7",
	});
}

export default Component;
