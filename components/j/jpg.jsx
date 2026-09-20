import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zux7atb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zux7atb5y"/>`,
		"fallback": "tabler:jpg",
	});
}

export default Component;
