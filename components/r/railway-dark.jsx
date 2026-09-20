import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jiz_soink.css';
import '../../css/i/iikk0lbuj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="jiz_soink"/><path class="iikk0lbuj"/></g>`,
		"fallback": "thesvg-color:railway-dark",
	});
}

export default Component;
