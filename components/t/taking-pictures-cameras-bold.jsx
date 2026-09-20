import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teizhzbmj.css';
import '../../css/l/lx8hjcc6o.css';
import '../../css/n/nceqg5bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teizhzbmj"/><path class="lx8hjcc6o"/><path class="nceqg5bzc"/>`,
		"fallback": "streamline-ultimate:taking-pictures-cameras-bold",
	});
}

export default Component;
