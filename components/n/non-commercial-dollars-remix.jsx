import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrj6jqbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrj6jqbqw"/>`,
		"fallback": "streamline-sharp:non-commercial-dollars-remix",
	});
}

export default Component;
