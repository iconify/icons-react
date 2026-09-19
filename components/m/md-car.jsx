import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbk-pdb2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbk-pdb2c"/>`,
		"fallback": "ion:md-car",
	});
}

export default Component;
