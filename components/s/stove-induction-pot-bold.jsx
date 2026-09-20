import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjq5zzbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjq5zzbhv"/>`,
		"fallback": "streamline-ultimate:stove-induction-pot-bold",
	});
}

export default Component;
