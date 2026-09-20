import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj6rrdcag.css';
import '../../css/z/zzefkb6jx.css';
import '../../css/o/oo4e5ubpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj6rrdcag"/><path class="zzefkb6jx"/><path class="oo4e5ubpg"/>`,
		"fallback": "token:vidya",
	});
}

export default Component;
