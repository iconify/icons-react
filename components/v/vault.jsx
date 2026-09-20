import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv2k8ptcj.css';
import '../../css/r/rm4r7y8ko.css';
import '../../css/f/fixn44brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv2k8ptcj"/><path class="rm4r7y8ko"/><path class="fixn44brh"/>`,
		"fallback": "stash:vault",
	});
}

export default Component;
