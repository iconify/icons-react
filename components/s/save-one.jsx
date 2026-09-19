import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/w/w80ub_bgs.css';
import '../../css/g/gz22pbbvy.css';
import '../../css/i/i-r6eqbky.css';
import '../../css/c/ca0jvcbbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="w80ub_bgs"/><path class="gz22pbbvy"/><path class="i-r6eqbky"/><path class="ca0jvcbbj"/></g>`,
		"fallback": "icon-park:save-one",
	});
}

export default Component;
