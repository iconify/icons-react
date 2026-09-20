import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldnmay76x.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/q/qufqqzb5y.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ldnmay76x"/><path class="in5wtwq8h"/><path clip-rule="evenodd" class="qufqqzb5y"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:o-button-blood-type",
	});
}

export default Component;
