import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkgxxf8dx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkgxxf8dx"/>`,
		"fallback": "garden:merge-20",
	});
}

export default Component;
