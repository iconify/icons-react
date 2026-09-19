import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/tatgggbkl.css';
import '../../css/j/jxl67pbry.css';
import '../../css/z/z5gbzwbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle transform="rotate(90 12 4)" class="tatgggbkl"/><circle transform="rotate(90 12 12)" class="jxl67pbry"/><circle transform="rotate(90 12 20)" class="z5gbzwbta"/></g>`,
		"fallback": "akar-icons:more-vertical",
	});
}

export default Component;
