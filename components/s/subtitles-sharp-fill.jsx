import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqbzs7b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hqbzs7b1j"/>`,
		"fallback": "keyline-icons:subtitles-sharp-fill",
	});
}

export default Component;
