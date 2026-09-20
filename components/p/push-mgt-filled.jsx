import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdf1hubnu.css';
import '../../css/f/f69nz6bai.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdf1hubnu"/><path clip-rule="evenodd" class="f69nz6bai"/>`,
		"fallback": "lsicon:push-mgt-filled",
	});
}

export default Component;
