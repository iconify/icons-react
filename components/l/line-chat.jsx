import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foqmv8hyk.css';
import '../../css/f/fr8e-acnc.css';
import '../../css/c/cps364dhp.css';
import '../../css/i/i-9u-zsjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foqmv8hyk"/><path class="fr8e-acnc"/><rect class="cps364dhp"/><path class="i-9u-zsjg"/>`,
		"fallback": "bxl:line-chat",
	});
}

export default Component;
