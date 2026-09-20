import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eguvsy.css';
import '../../css/k/kyznsp.css';
import '../../css/n/nz-btv.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eguvsy kyznsp"/><path class="kyznsp nz-btv"/>`,
		"fallback": "line-md:person-filled",
	});
}

export default Component;
