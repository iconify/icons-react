import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw0twcb-j.css';
import '../../css/a/a8xdzwblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw0twcb-j"/><path class="a8xdzwblt"/>`,
		"fallback": "streamline-ultimate:volume-control-up-3-bold",
	});
}

export default Component;
