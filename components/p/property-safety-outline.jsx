import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hooo6gbzm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hooo6gbzm"/>`,
		"fallback": "ant-design:property-safety-outline",
	});
}

export default Component;
