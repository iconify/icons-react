import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjo6bv0or.css';

const viewBox = {"width":443,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjo6bv0or"/>`,
		"fallback": "file-icons:sequelize",
	});
}

export default Component;
