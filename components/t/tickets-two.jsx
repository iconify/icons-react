import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4wwxhbyk.css';
import '../../css/n/n30yiobyy.css';
import '../../css/a/axeg0dbth.css';
import '../../css/v/vatrexbak.css';
import '../../css/q/qznx_nb7p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlMH7oeYU"><g class="ft5dv1b6b"><path class="k4wwxhbyk"/><path class="n30yiobyy"/><circle class="axeg0dbth"/><circle class="vatrexbak"/><circle class="qznx_nb7p"/></g></mask></defs><path mask="url(#SVGlMH7oeYU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tickets-two",
	});
}

export default Component;
