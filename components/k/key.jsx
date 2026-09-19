import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vul3t5bdd.css';
import '../../css/x/xi0idpw6x.css';
import '../../css/e/eo6fmmbww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="vul3t5bdd"/><path class="xi0idpw6x"/><path class="eo6fmmbww"/></g>`,
		"fallback": "icon-park:key",
	});
}

export default Component;
