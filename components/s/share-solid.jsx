import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8w08ccil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8w08ccil"/>`,
		"fallback": "heroicons:share-solid",
	});
}

export default Component;
