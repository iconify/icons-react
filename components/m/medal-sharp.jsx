import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjy_8-bky.css';
import '../../css/y/yehn7qb3c.css';
import '../../css/x/xfs19bcvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjy_8-bky"/><path class="yehn7qb3c"/><circle class="xfs19bcvf"/>`,
		"fallback": "famicons:medal-sharp",
	});
}

export default Component;
