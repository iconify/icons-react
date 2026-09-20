import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pwebkqbdb.css';
import '../../css/g/g-cuwccgh.css';
import '../../css/t/tnx6kmbfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pwebkqbdb"/><path class="g-cuwccgh"/><path class="tnx6kmbfs"/></g>`,
		"fallback": "streamline-kameleon-color:oven-glove-duo",
	});
}

export default Component;
