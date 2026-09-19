import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmi7ps-qu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmi7ps-qu"/>`,
		"fallback": "ant-design:property-safety-filled",
	});
}

export default Component;
