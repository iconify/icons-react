import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcaub0ivy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcaub0ivy"/>`,
		"fallback": "icomoon-free:plus",
	});
}

export default Component;
