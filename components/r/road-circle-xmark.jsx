import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggrgy84wa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggrgy84wa"/>`,
		"fallback": "fa7-solid:road-circle-xmark",
	});
}

export default Component;
