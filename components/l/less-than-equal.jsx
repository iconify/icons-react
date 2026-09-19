import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfmvkpkva.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfmvkpkva"/>`,
		"fallback": "fa6-solid:less-than-equal",
	});
}

export default Component;
