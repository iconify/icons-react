import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvcjt11dq.css';
import '../../css/s/stqyn-aem.css';
import '../../css/b/ba8nfsfvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGitQdVoSr" x1="-75.6" x2="450" y1="387.8" y2="173" gradientUnits="userSpaceOnUse"><stop offset="0" class="qvcjt11dq"/><stop offset="1" class="stqyn-aem"/></linearGradient><path fill="url(#SVGitQdVoSr)" class="ba8nfsfvj"/>`,
		"fallback": "selfhst:logto",
	});
}

export default Component;
