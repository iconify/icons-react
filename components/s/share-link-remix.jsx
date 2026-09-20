import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgavx_zmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgavx_zmt"/>`,
		"fallback": "streamline-sharp:share-link-remix",
	});
}

export default Component;
