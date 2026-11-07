import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks9itzb5x.css';
import '../../css/a/av07jwwcc.css';
import '../../css/e/edp79wbbi.css';
import '../../css/n/n-ppa3b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks9itzb5x"/><path class="av07jwwcc"/><path class="edp79wbbi"/><path class="n-ppa3b-m"/>`,
		"fallback": "solar:link-broken-bold",
	});
}

export default Component;
