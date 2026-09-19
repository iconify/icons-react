import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcfxtrb6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcfxtrb6p"/>`,
		"fallback": "file-icons:test-ruby",
	});
}

export default Component;
