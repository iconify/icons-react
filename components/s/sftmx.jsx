import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa_s2gbth.css';
import '../../css/a/amj00lbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa_s2gbth"/><path clip-rule="evenodd" class="amj00lbxa"/>`,
		"fallback": "token:sftmx",
	});
}

export default Component;
