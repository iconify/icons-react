import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/essr0js1w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="essr0js1w"/>`,
		"fallback": "bi:typescript",
	});
}

export default Component;
