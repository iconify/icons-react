import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb-ml4nyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb-ml4nyg"/>`,
		"fallback": "tdesign:tree-catalog-filled",
	});
}

export default Component;
