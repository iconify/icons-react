import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvom3bcqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvom3bcqy"/>`,
		"fallback": "iconamoon:share-1-thin",
	});
}

export default Component;
