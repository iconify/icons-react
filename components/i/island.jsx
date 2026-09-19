import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eloxbjbhw.css';
import '../../css/v/vbr9v4bnn.css';
import '../../css/i/ivxtkuqms.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eloxbjbhw"/><path class="vbr9v4bnn"/><path class="ivxtkuqms"/>`,
		"fallback": "fontisto:island",
	});
}

export default Component;
