import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5i_igbuz.css';
import '../../css/l/ldw2udbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5i_igbuz"/><path class="ldw2udbvg"/>`,
		"fallback": "streamline-freehand:share-forward",
	});
}

export default Component;
