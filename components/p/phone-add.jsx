import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcn-lacxq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wcn-lacxq"/>`,
		"fallback": "glyphs-poly:phone-add",
	});
}

export default Component;
