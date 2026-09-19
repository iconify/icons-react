import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaev_d16p.css';
import '../../css/a/a8l7vd6df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zaev_d16p"/><rect class="a8l7vd6df"/>`,
		"fallback": "boxicons:pause-filled",
	});
}

export default Component;
