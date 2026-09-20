import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rjoxvcbpj.css';
import '../../css/c/czfcabbog.css';
import '../../css/t/tcjl3pbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rjoxvcbpj"/><path class="czfcabbog"/><path class="tcjl3pbdk"/></g>`,
		"fallback": "streamline-freehand:text-formating-rotate-angle",
	});
}

export default Component;
