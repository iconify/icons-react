import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5s_9xbrv.css';
import '../../css/b/bdcxdmkpj.css';
import '../../css/a/amtl2pzka.css';
import '../../css/e/ef05l0agj.css';
import '../../css/k/k3wxd4bhv.css';
import '../../css/w/wlfk7mk0q.css';
import '../../css/p/pel-zvbot.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5s_9xbrv"/><path class="bdcxdmkpj"/><path class="amtl2pzka"/><path class="ef05l0agj"/><path class="k3wxd4bhv"/><path class="wlfk7mk0q"/><path class="pel-zvbot"/>`,
		"fallback": "thesvg:matplotlib",
	});
}

export default Component;
