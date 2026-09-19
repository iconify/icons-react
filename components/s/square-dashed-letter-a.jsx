import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emjhn05hs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emjhn05hs"/>`,
		"fallback": "gravity-ui:square-dashed-letter-a",
	});
}

export default Component;
