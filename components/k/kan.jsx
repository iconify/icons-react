import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzzv-dbod.css';
import '../../css/v/v19mbwu8m.css';
import '../../css/p/pbaa7xb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzzv-dbod"/><path class="v19mbwu8m"/><path class="pbaa7xb3m"/>`,
		"fallback": "token:kan",
	});
}

export default Component;
