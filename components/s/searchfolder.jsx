import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyo_zsbiv.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyo_zsbiv"/>`,
		"fallback": "whh:searchfolder",
	});
}

export default Component;
