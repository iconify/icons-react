import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v08lq0bxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v08lq0bxg"/>`,
		"fallback": "streamline-plump:politics-vote-2-solid",
	});
}

export default Component;
