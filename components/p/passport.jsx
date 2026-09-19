import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf-zqubsq.css';
import '../../css/k/kb9hd4ajm.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf-zqubsq"/><path class="kb9hd4ajm"/>`,
		"fallback": "fontisto:passport",
	});
}

export default Component;
