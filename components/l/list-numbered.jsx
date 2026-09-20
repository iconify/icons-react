import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alpe4e-yq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="alpe4e-yq"/>`,
		"fallback": "pajamas:list-numbered",
	});
}

export default Component;
