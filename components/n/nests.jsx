import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/goqdtdzdl.css';
import '../../css/f/fl1nyqhqr.css';
import '../../css/s/st4dpqblu.css';
import '../../css/p/pe2o9olpl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="goqdtdzdl"/><path clip-rule="evenodd" class="fl1nyqhqr"/><path clip-rule="evenodd" class="st4dpqblu"/><path clip-rule="evenodd" class="pe2o9olpl"/></g>`,
		"fallback": "icon-park:nests",
	});
}

export default Component;
