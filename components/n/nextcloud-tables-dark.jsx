import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_aaqkbpl.css';
import '../../css/u/uzefn3-hw.css';
import '../../css/n/ndep3kwgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_aaqkbpl"/><path clip-rule="evenodd" class="uzefn3-hw"/><path clip-rule="evenodd" class="ndep3kwgj"/>`,
		"fallback": "selfhst:nextcloud-tables-dark",
	});
}

export default Component;
