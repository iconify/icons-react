import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns4x1ubzt.css';
import '../../css/x/xymu9dbwi.css';
import '../../css/a/aqi7mnbvx.css';
import '../../css/h/h2ii2u4ol.css';
import '../../css/l/lrln7kj3m.css';
import '../../css/m/m12-ik_gu.css';
import '../../css/l/lg2debczs.css';
import '../../css/h/h15kjqltt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns4x1ubzt"/><path class="xymu9dbwi"/><path class="aqi7mnbvx"/><circle class="h2ii2u4ol"/><circle class="lrln7kj3m"/><circle class="m12-ik_gu"/><circle class="lg2debczs"/><path class="h15kjqltt"/>`,
		"fallback": "fxemoji:videogame",
	});
}

export default Component;
