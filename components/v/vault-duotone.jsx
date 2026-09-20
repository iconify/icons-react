import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3x5_inum.css';
import '../../css/w/wx5lbcbct.css';
import '../../css/a/afas8h87o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3x5_inum"/><path class="wx5lbcbct"/><path class="afas8h87o"/>`,
		"fallback": "stash:vault-duotone",
	});
}

export default Component;
