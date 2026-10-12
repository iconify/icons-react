import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvt3gewoh.css';
import '../../css/d/doecxd77k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvt3gewoh"/><path class="doecxd77k"/>`,
		"fallback": "lucide-extended:square-bookmark-filled",
	});
}

export default Component;
