import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmd108bpe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmd108bpe"/>`,
		"fallback": "f7:speaker-slash",
	});
}

export default Component;
