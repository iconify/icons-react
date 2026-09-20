import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz4jzm5oa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz4jzm5oa"/>`,
		"fallback": "material-icon-theme:just",
	});
}

export default Component;
