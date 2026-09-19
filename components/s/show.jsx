import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spb-dpbsw.css';
import '../../css/i/ilmvj-v8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spb-dpbsw"/><path class="ilmvj-v8d"/>`,
		"fallback": "bxs:show",
	});
}

export default Component;
