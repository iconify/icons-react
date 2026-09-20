import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es_julb3f.css';
import '../../css/f/fffoeubbe.css';
import '../../css/d/dxbo5w2dx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es_julb3f"/><path class="fffoeubbe"/><path class="dxbo5w2dx"/>`,
		"fallback": "openmoji:sweat-droplets",
	});
}

export default Component;
