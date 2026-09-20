import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn7fs3i6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pn7fs3i6b"/>`,
		"fallback": "streamline-sharp:paragraph-article-solid",
	});
}

export default Component;
