import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjvn1nbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sjvn1nbmc"/>`,
		"fallback": "streamline-sharp-color:recording-tape-2-flat",
	});
}

export default Component;
