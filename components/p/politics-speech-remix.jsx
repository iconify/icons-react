import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mihnyqbvf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mihnyqbvf"/>`,
		"fallback": "streamline-flex:politics-speech-remix",
	});
}

export default Component;
