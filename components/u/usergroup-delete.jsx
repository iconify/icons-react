import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5w6ywn1u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5w6ywn1u"/>`,
		"fallback": "ant-design:usergroup-delete",
	});
}

export default Component;
