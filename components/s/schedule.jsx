import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q35sru-em.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q35sru-em"/>`,
		"fallback": "ant-design:schedule",
	});
}

export default Component;
