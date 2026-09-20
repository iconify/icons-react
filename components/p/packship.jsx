import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gec-ygbwq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gec-ygbwq"/>`,
		"fallback": "material-icon-theme:packship",
	});
}

export default Component;
