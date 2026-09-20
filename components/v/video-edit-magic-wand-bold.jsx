import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk706fomp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk706fomp"/>`,
		"fallback": "streamline-ultimate:video-edit-magic-wand-bold",
	});
}

export default Component;
