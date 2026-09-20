import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkulqzb4r.css';
import '../../css/b/bdlooccco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkulqzb4r"/><path class="bdlooccco"/>`,
		"fallback": "streamline-ultimate:synchronize-arrows-lock-bold",
	});
}

export default Component;
