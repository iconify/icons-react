import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de11cjbha.css';
import '../../css/h/hj5-87b9h.css';
import '../../css/t/tefo83bja.css';
import '../../css/g/gtksz7byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de11cjbha"/><path class="hj5-87b9h"/><path class="tefo83bja"/><path class="gtksz7byo"/>`,
		"fallback": "tdesign:logo-chrome-filled",
	});
}

export default Component;
