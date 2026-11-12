import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elfgzfcxk.css';
import '../../css/a/azrfczl9a.css';
import '../../css/v/v8ulj_byc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elfgzfcxk"/><path class="azrfczl9a"/><path class="v8ulj_byc"/>`,
		"fallback": "selfhst:nanoclaw-dark",
	});
}

export default Component;
