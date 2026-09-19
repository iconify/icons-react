import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jp89slbwl.css';
import '../../css/j/jxl67pbry.css';
import '../../css/c/cgwv8rv8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="jp89slbwl"/><circle class="jxl67pbry"/><circle class="cgwv8rv8i"/></g>`,
		"fallback": "akar-icons:more-horizontal",
	});
}

export default Component;
