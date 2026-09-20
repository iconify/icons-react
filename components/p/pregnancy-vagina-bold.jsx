import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za6sec2-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za6sec2-w"/>`,
		"fallback": "streamline-ultimate:pregnancy-vagina-bold",
	});
}

export default Component;
