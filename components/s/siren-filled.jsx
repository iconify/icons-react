import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkduq0b3q.css';
import '../../css/n/n0k2q9-gv.css';
import '../../css/b/b2mkaccsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="dkduq0b3q"/><path clip-rule="evenodd" class="n0k2q9-gv"/><path class="b2mkaccsb"/>`,
		"fallback": "bitcoin-icons:siren-filled",
	});
}

export default Component;
