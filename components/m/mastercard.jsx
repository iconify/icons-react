import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfo1k5b-e.css';
import '../../css/f/fzzzpfbia.css';
import '../../css/l/l80966bqg.css';
import '../../css/i/i-gcz-eip.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfo1k5b-e"/><path class="fzzzpfbia"/><path class="l80966bqg"/><path class="i-gcz-eip"/>`,
		"fallback": "formkit:mastercard",
	});
}

export default Component;
