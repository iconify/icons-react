import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-mhshb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o-mhshb-f"/>`,
		"fallback": "streamline-freehand:paragraphs-insert-image-top",
	});
}

export default Component;
