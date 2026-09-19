import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3_ppud3s.css';
import '../../css/s/stheyzbwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3_ppud3s"/><path class="stheyzbwt"/>`,
		"fallback": "carbon:version-patch",
	});
}

export default Component;
