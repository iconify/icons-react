import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe3j3gbqd.css';
import '../../css/u/uruqrcc2v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe3j3gbqd"/><path class="uruqrcc2v"/>`,
		"fallback": "selfhst:netflix",
	});
}

export default Component;
