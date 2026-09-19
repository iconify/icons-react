import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u99giob-v.css';
import '../../css/h/hrejwrbgb.css';
import '../../css/g/gba4ubbyo.css';
import '../../css/x/xk_izwn6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="u99giob-v"/><rect class="hrejwrbgb"/><rect class="gba4ubbyo"/><rect class="xk_izwn6t"/>`,
		"fallback": "eva:menu-2-outline",
	});
}

export default Component;
