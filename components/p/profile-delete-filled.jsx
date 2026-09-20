import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlh38yb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlh38yb5j"/>`,
		"fallback": "reicon:profile-delete-filled",
	});
}

export default Component;
