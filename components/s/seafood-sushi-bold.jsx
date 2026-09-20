import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_smzvq1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_smzvq1a"/>`,
		"fallback": "streamline-ultimate:seafood-sushi-bold",
	});
}

export default Component;
