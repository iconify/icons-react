import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm_61uztw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm_61uztw"/>`,
		"fallback": "pinhead:pixel-jack-o-lantern",
	});
}

export default Component;
