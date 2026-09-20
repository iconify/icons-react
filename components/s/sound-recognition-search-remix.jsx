import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whvue4bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whvue4bqg"/>`,
		"fallback": "streamline-sharp:sound-recognition-search-remix",
	});
}

export default Component;
