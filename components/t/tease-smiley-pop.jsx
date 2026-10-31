import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/x/xihjwnk6c.css';
import '../../css/c/czvfdabnx.css';
import '../../css/x/xx7qj7wrw.css';
import '../../css/c/c-usr_byg.css';
import '../../css/t/tx07zc5ge.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="xihjwnk6c"/><path class="czvfdabnx"/><path class="xx7qj7wrw"/><path clip-rule="evenodd" class="c-usr_byg"/><path class="tx07zc5ge"/></g>`,
		"fallback": "streamline-kameleon-color:tease-smiley-pop",
	});
}

export default Component;
